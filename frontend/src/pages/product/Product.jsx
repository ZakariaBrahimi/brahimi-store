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
import slider_1 from "../../assets/1-slider.jpg";
import { useState } from "react";
import ImageGallery from "react-image-gallery";
import { useLocation } from "react-router-dom";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/1000/600/",
    },
  ];
  const location = useLocation()
  const { product_id } = location.state
  console.log(product_id)
  return (
    <section className="w-11/12 mx-auto mb-28 bg-white grid grid-cols-1 lg:grid-cols-2 gap-6 items-start justify-between">
      {/* Product Pics */}
      <div className=" lg:order-2 flex flex-col gap-6 lg:col-span-1">
      <ImageGallery showIndex={true} className='w-90 flex ' items={images} />
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
          <h1 className=" text-3xl">DNK Blue Shoes</h1>
          <p className=" font-bold  text-2xl">
            <span className="text-blue-500 line-through">د.ج 400</span> –{" "}
            <span>د.ج 200</span>
          </p>
          <p>DNK Blue ShoesDNK Blue ShoesDNK Blue Shoes</p>
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
              <Button onPress={onOpen} className="w-full font-bold" color="primary">
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
        <p>
          DNK Blue ShoesDNK Blue ShoesDNK Blue ShoesDNK Blue ShoesDNK Blue
          ShoesDNK Blue Shoes
        </p>
      </div>
      <Modal className="    "
        isOpen={isOpen} 
        placement={'auto'}
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
              <ModalFooter >
                <Button className="font-bold" color="danger" variant="light" onPress={onClose}>
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
