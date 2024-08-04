import { api } from "@/libs/api";
import { useQuery } from "@tanstack/react-query";

export const UseGetFoodById = ({ id }) => {

  const { data } = useQuery({
        enabled: !!id,
        queryKey: ['get-recipes-dashboard', id],
        queryFn: async () => {
            const response = await api.get(`/recipes/${id}`);

            return response.data;
        }
    });

    return {data}   
}