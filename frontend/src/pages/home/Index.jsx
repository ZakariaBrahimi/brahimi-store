import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import Slider from "./Slider";
import { Button } from "@nextui-org/react";

const Index = () => {
  return (
    <div className=" space-y-10 w-11/12 lg:w-9/12 xl:w-8/12 mx-auto my-8">
      <Slider />
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-8 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <ProductCard key={index} />
        ))}
      </section>
      <div className="w-fit mx-auto">
        <Button className="text-center font-semibold" color="primary" variant="shadow">
            See all Products
        </Button>

      </div>
    </div>
  );
};

export default Index;
