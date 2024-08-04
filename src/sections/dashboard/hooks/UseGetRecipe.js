import { api } from "@/libs/api";
import { useQuery } from "@tanstack/react-query";

export const UseGetRecipe = ({ isLanding }) => {

  const { data, refetch } = useQuery({
        queryKey: ['get-recipes-dashboard', isLanding],
        queryFn: async () => {
            const response = await api.get("/recipes");

            return response.data;
        }
    });

    return { data, refetch };
}