/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import imageUrlBuilder from "@sanity/image-url";
// import BlockContent from '@sanity/block-content-to-react'
import PortableText from '@sanity/block-content-to-react'
import OrderForm from './OrderForm.jsx'

const Product = () => {
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
              د.ج {data?.result[0]?.old_price}
            </span>{" "}
            – <span>د.ج {data?.result[0]?.new_price}</span>
          </p>
          <p>{data?.result[0]?.short_description}</p>
          <p></p>
        </div>
        
      <OrderForm product={data?.result[0]}/>
      </div>

      {/* Description */}
      <div className="lg:order-3 border-t-4 border-[#6b6a6b] space-y-2 pt-1 lg:col-span-2">
        <h5 className="text-[#6b6a6b] font-bold hover:opacity-90 transition-opacity duration-700 cursor-pointer">
          الوصف
        </h5>
        <PortableText blocks={data?.result[0]?.full_description} serializers={serializers} />
      </div>
    </section>
  );
};

export default Product;
