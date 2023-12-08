import { useQuery } from "@tanstack/react-query";


const useServices = () => {
    const {data, isLoading, isFetching} = useQuery({
        queryKey: ['services'],
        queryFn: async() => {
          const data = await fetch("https://local-tours-and-guide-server-vert.vercel.app/services");
           return await data.json()
          
        },
      })
    return {data, isFetching, isLoading};
};

export default useServices;