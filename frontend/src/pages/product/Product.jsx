import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import slider_1 from "../../assets/1-slider.jpg";
const Product = () => {
  return (
    <section className="w-11/12 lg:w-9/12 xl:w-8/12 mx-auto mb-28 bg-white ">
      {/* Product Pics */}
      <div className=" flex flex-col gap-6">
        <img className="w-full h-64" src={slider_1} alt="" />
        <div className="flex gap-4 items-center justify-center">
          <img className="w-full h-full" src={slider_1} alt="" />
          <img className="w-full h-full" src={slider_1} alt="" />
          <img className="w-full h-full" src={slider_1} alt="" />
        </div>
      </div>
      {/* Product Details */}
      <div className=" space-y-4">
        <h1 className=" text-3xl">DNK Blue Shoes</h1>
        <p className=" font-bold  text-2xl">
          <span className="text-blue-500 line-through">د.ج 400</span> –{" "}
          <span>د.ج 200</span>
        </p>
        <p>DNK Blue ShoesDNK Blue ShoesDNK Blue Shoes</p>
        <p></p>
      </div>
      {/* Order Form */}
      <div className="flex flex-col gap-4 my-8 bg-[#FBFBFB] px-8 py-4 border border-[#D9D9D9]">
        <p>
          للطلب أدخل معلوماتك في الخانات أسفله ???? .. ثم إضغط على زر اطلب الان
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
          <Input
            isRequired
            variant="bordered"
            size="sm"
            type="text"
            label="العنوان الكـامل"
          />
          <div className="flex gap-3">
            <Select
              size="sm"
              variant="bordered"
              isRequired
              label="الولايـة/المنطـقة"
              className="max-w-full bg-transparent"
            >
              {["batna", "Setif", "Alger", "Oran"].map((wilaya) => (
                <SelectItem key={wilaya} value={wilaya}>
                  {wilaya}
                </SelectItem>
              ))}
            </Select>
            <Input
              isRequired
              variant="bordered"
              size="sm"
              type="text"
              label="البلدية"
            />
          </div>

          <div>
            
            <Button className="w-8/12 font-bold" color="primary">اطلـب الان</Button>
          </div>
        </form>
      </div>
      {/* Description */}
      <div className="border-t-4 border-[#6b6a6b] space-y-2 pt-1">
        <h5 className="text-[#6b6a6b] font-bold hover:opacity-90 transition-opacity duration-700 cursor-pointer">
          الوصف
        </h5>
        <p>
          DNK Blue ShoesDNK Blue ShoesDNK Blue ShoesDNK Blue ShoesDNK Blue
          ShoesDNK Blue Shoes
        </p>
      </div>
    </section>
  );
};

export default Product;
