import { useContext } from "react";
import SanityDataContext from "../context/SanityDataContext";

const CallUsTopBar = () => {
    const { platformData } = useContext(SanityDataContext);
  return (
    <header className={`bg-[#${platformData && platformData?.data?.result[0]?.primary_color}] bg-[#fb4c54] w-full sticky z-50 text-white top-0 left-0 text-center py-3`}>أطلب الآن! والدفع عند الاستلام | هاتف: 0{platformData?.data?.result[0]?.phone}</header>
  )
}

export default CallUsTopBar