import imageUrlBuilder from '@sanity/image-url'

function ProductCard({product}) {
    const builder = imageUrlBuilder({
        baseUrl: 'https://cdn.sanity.io',
        projectId: '06pfaut4',
        dataset: 'production',
      })
      const urlFor = (source) => builder.image(source)
    console.log(product?.product_pictures[0]?.asset?._ref)
  return (
    <div className="border hover:rotate-1 transition-transform duration-500 hover:scale-105 cursor-pointer shadow-lg rounded-md flex justify-center items-center flex-col">
      <img className="w-full h-28 rounded-t-md shadow-md" src={urlFor(product?.product_pictures[0]?.asset?._ref)} alt="productImg" />
      <div className="flex justify-center items-center flex-col gap-4  py-2">
        <h2 className=" text-base font-bold">{product?.name}</h2>
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
            <span className="text-blue-400">{product?.price} دج</span>
            <span> - </span>
            <span className="text-red-400 line-through">1200دج</span>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;
