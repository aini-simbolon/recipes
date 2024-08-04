import { api } from "@/libs/api";
import { useUserStore } from "@/stores/UseUserStore";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

export const useUser = () => {
    const router = useRouter();
    const { token, setUser } = useUserStore();


    const { data, error, isLoading } = useQuery({
        enabled: !!token, 
        queryKey: ["get-user-info", token],
        queryFn: async () => {
            const response = await api.get("/auth/check");
            const data = response.data;
            setUser(data); 
            return data; 
        },
        onError: () => {
            router.push("/SignIn"); 
        }
    });


    React.useEffect(() => {
        const localToken = localStorage.getItem("token");
        if (!localToken) {
            router.push("/SignIn");
        }
    }, [router]);

    return { data, error, isLoading };
};
