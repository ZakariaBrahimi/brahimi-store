/* eslint-disable react/prop-types */
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from '@sanity/block-content-to-react'
import PortableText from '@sanity/block-content-to-react'

const Product = () => {
  // const {product, isPending, isError, error } = useContext(SanityDataContext)
  const params = useParams();
  const productID = params["product_id"];
  const fetchProductData = async () => {
    const product = await fetch(
      `https://06pfaut4.api.sanity.io/v1/data/query/production?query=*[_id == "${productID}"]`
    );
    return product.json();
  };
  const { data } = useQuery({
    queryKey: ["product"],
    queryFn: fetchProductData,
  });
  const [quantity, setQuantity] = useState(1);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [images, setImages] = useState([]);
  useEffect(() => {
    const builder = imageUrlBuilder({
      baseUrl: "https://cdn.sanity.io",
      projectId: "06pfaut4",
      dataset: "production",
    });
    const urlFor = (source) => builder.image(source);
    const newImages = data
      ? data.result[0].product_pictures.map((pic) => ({
          original: urlFor(pic.asset?._ref).url(),
          thumbnail: urlFor(pic.asset?._ref).url(),
        }))
      : [];

    setImages([ ...newImages]);
  }, [data]);
  const serializers = {

    types: {
  
      block: (props) => {
  
        switch (props.node.style) {
  
          case 'h1':
            return <h1 className="text-[2.375rem]">{props.children}</h1>
  
          case 'h2':
            return <h2 className="text-[2.0625rem]">{props.children}</h2>

          case 'h3':
            return <h3 className="text-[1.6875rem]">{props.children}</h3>
          case 'h4':
            return <h4 className="text-[1.3125rem]">{props.children}</h4>
  
          default:
            return <p>{props.children}</p>
        }
  
      }
  
    }
  
  }
  return (
    <section className="w-11/12 mx-auto mb-28 bg-white grid grid-cols-1 lg:grid-cols-2 gap-6 items-start justify-between">
      {/* Product Pics */}
      <div className=" lg:order-2 flex flex-col gap-6 lg:col-span-1">
        {images && (
          <ImageGallery
            showIndex={true}
            className="w-90 flex max-h-56"
            items={images}
            
          />
        )}
        {/* <img className="w-full h-80" src={slider_1} alt="" />
        <div className="flex gap-4 items-center justify-center">
          <img className="w-full h-full" src={slider_1} alt="" />
          <img className="w-full h-full" src={slider_1} alt="" />
          <img className="w-full h-full" src={slider_1} alt="" />
        </div> */}
      </div>
      {/* Product Details && FORM */}
      <div className="lg:order-1 lg:col-span-1">
        <div className=" space-y-4 ">
          <h1 className=" text-3xl">{data?.result[0]?.name}</h1>
          <p className=" font-bold  text-2xl">
            <span className="text-blue-500 line-through">
              د.ج {data?.result[0]?.price}
            </span>{" "}
            – <span>د.ج 200</span>
          </p>
          <p>{data?.result[0]?.short_description}</p>
          <p></p>
        </div>
        <div className="flex flex-col gap-4 border-[#D9D9D9] bg-[#FBFBFB] my-8  px-8 py-4 border">
          <p>
            للطلب أدخل معلوماتك في الخانات أسفله ???? .. ثم إضغط على زر اطلب
            الان
          </p>
          <form
            action=""
            method="post"
            className="flex flex-col gap-6 text-right"
          >
            <Input
              className="text-right placeholder:text-right "
              isRequired
              variant="bordered"
              size="sm"
              type="text"
              label="الإسم الكامـل"
            />
            <Input
              isRequired
              variant="bordered"
              size="sm"
              type="number"
              label="رقـم الهاتف"
            />
            {/* <Input
                isRequired
                variant="bordered"
                size="sm"
                type="text"
                label="العنوان الكـامل"
            /> */}
            <div className="flex gap-3">
              {["batna", "Setif", "Alger", "Oran"].map((wilaya) => (
                <SelectItem key={wilaya} value={wilaya}>
                  {wilaya}
                </SelectItem>
              ))}
              <Input
                isRequired
                variant="bordered"
                size="sm"
                type="text"
                label="البلدية"
              />
              <Select
                size="sm"
                variant="bordered"
                isRequired
                label="الولايـة"
                className="max-w-full bg-transparent"
              ></Select>
            </div>

            <div className="flex justify-end w-full gap-7">
              <Button
                onPress={onOpen}
                className="w-full font-bold"
                color="primary"
              >
                اطلـب الان
              </Button>
              <div className="flex gap-3 items-center justify-end font-bold text-lg">
                <button
                  className="border rounded-md bg-white px-2"
                  type="button"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
                <span>{quantity}</span>
                {/* <input className='bg-transparent appearance-none font-semibold' type="number" onChange={(e)=>setQuantity(e.target.value)} value={quantity} min="1" name="quantity" id="quantity" required="" readOnly=""/> */}
                <button
                  className="border rounded-md bg-white px-2"
                  type="button"
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity((prev) => prev - 1);
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Description */}
      <div className="lg:order-3 border-t-4 border-[#6b6a6b] space-y-2 pt-1 lg:col-span-2">
        <h5 className="text-[#6b6a6b] font-bold hover:opacity-90 transition-opacity duration-700 cursor-pointer">
          الوصف
        </h5>
        <PortableText blocks={data?.result[0]?.full_description} serializers={serializers} />
      </div>
      <Modal
        className="    "
        isOpen={isOpen}
        placement={"auto"}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <div>
                  <div className="border-b-2 px-3 py-5 w-full flex flex-row-reverse justify-between items-center">
                    <p className="font-bold">: المنتج</p>
                    <p>DNK Blue Shoes</p>
                  </div>
                  <div className="border-b-2 px-3 py-5 w-full flex flex-row-reverse justify-between items-center">
                    <p className="font-bold">: الكميـة</p>
                    <p>{quantity}</p>
                  </div>
                  <div className="border-b-2 px-3 py-5 w-full flex flex-row-reverse justify-between items-center">
                    <p className="font-bold">: سعر الشحـن</p>
                    <p>600 DA</p>
                  </div>
                  <div className=" px-3 py-5 w-full flex flex-row-reverse justify-between items-center">
                    <p className="font-bold">: السعر الإجمـالي</p>
                    <p>1200 DA</p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="font-bold"
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
                  إلغـاء
                </Button>
                <Button className="font-bold" color="primary" onPress={onClose}>
                  تأكيـد الطلبية
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default Product;
