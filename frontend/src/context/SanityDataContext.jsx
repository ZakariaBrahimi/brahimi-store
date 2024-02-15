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
const createOrder = async (data) => {
    const response = await axios.post('https://06pfaut4.api.sanity.io/v1/data/query/production?query=*[_type == "order"]', data)
    console.log(response.data)
    return response.data
}
// eslint-disable-next-line react/prop-types
export const SanityDataProvider = ({ children }) => {

  const [products, platformData] = useQueries(
    
    {
      queries: [
        { queryKey: ["products"], queryFn: fetchProductsData },
        { queryKey: ["platformData"], queryFn: fetchPlatformData },
      ],
    }
  );
  const { mutate, isLoading } = useMutation(createOrder, {
    onSuccess: data => {
       console.log(data);
       const message = "success"
       alert(message)
 },
   onError: () => {
        alert("there was an error")
 },
   onSettled: () => {
      QueryClient.invalidateQueries('createOrder')
 }
 });
  let contextData = {
    products: products,
    platformData: platformData,
    createOrder: mutate
  };
  return (
    <SanityDataContext.Provider value={contextData}>
      {children}
    </SanityDataContext.Provider>
  );
};
