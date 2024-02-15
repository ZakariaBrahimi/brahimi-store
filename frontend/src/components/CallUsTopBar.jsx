import { useContext } from "react";
import SanityDataContext from "../context/SanityDataContext";

const CallUsTopBar = () => {
    const { platformData } = useContext(SanityDataContext);
    console.log(typeof(platformData?.data?.result[0]?.primary_color))
  return (
    <header className={`bg-[#${platformData && platformData?.data?.result[0]?.primary_color}] w-full sticky z-50 text-white top-0 left-0 text-center py-3`}>أطلب الآن! والدفع عند الاستلام | هاتف: {platformData?.data?.result[0]?.phone}</header>
  )
}

export default CallUsTopBar