import { createContext } from 'react';
import { useQuery } from "@tanstack/react-query";

const SanityDataContext = createContext();
export default SanityDataContext;
const fetchProductsData = async () => {
    const result = await fetch('https://06pfaut4.api.sanity.io/v1/data/query/production?query=*[_type == "product"][0...9]');
    return result.json();
};

// eslint-disable-next-line react/prop-types
export const SanityDataProvider = ({ children }) => {
    const { data, isLoading, isError, error, isPending } = useQuery({ queryKey: ['products'], queryFn: fetchProductsData })
    
    let contextData = {
        isError: isError,
        isLoading: isLoading,
        error: error,
        products: data,
        isPending: isPending,
    };
    return (
        <SanityDataContext.Provider value={contextData}>
            {children}
        </SanityDataContext.Provider>
    );
};

