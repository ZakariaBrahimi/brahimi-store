import { createContext } from "react";
import { QueryClient, useMutation, useQueries } from "@tanstack/react-query";

import axios from 'axios'
const SanityDataContext = createContext();
export default SanityDataContext;
const fetchProductsData = async () => {
  const result = await fetch(
    'https://06pfaut4.api.sanity.io/v1/data/query/production?query=*[_type == "product"]'
  );
  return result.json();
};
const fetchPlatformData = async () => {
  const result = await fetch(
    'https://06pfaut4.api.sanity.io/v1/data/query/production?query=*[_type == "platform_data"]'
  );
  return result.json();
};

// eslint-disable-next-line react/prop-types
export const SanityDataProvider = ({ children }) => {

  const [products, platformData] = useQueries(
    
    {
      queries: [
        { queryKey: ["products"], queryFn: fetchProductsData },
        { queryKey: ["platformData"], queryFn: fetchPlatformData },
      ],
    //   refetchOnWindowFocus: false
    }
  );
  let contextData = {
    products: products,
    platformData: platformData,
  };
  return (
    <SanityDataContext.Provider value={contextData}>
      {children}
    </SanityDataContext.Provider>
  );
};
