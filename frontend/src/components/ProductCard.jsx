import product from "../assets/1-slider.jpg";

function ProductCard() {
  return (
    <div className="border hover:rotate-1 transition-transform duration-500 hover:scale-105 cursor-pointer shadow-lg rounded-md flex justify-center items-center flex-col">
      <img className="w-full h-auto rounded-t-md shadow-md" src={product} alt="product" />
      <div className="flex justify-center items-center flex-col gap-4  py-2">
        <h2 className=" text-base font-bold">DNK Blue Shoes</h2>
        {/* stars */}
        <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((index) => (
            <svg
                key={index}
                className="w-5 h-5"
                viewBox="0 -0.5 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
                fill="#FFCB45"
                />
            </svg>
            ))}
        </div>
        {/* price */}
        <div className=" flex gap-4  font-bold text-[.9rem]">
            <span className="text-red-400">1200دج</span>
            <span> - </span>
            <span className="text-blue-400 line-through">1200دج</span>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;
