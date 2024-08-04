import { setAuthToken } from "@/libs/api";
import { useUserStore } from "@/stores/UseUserStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css"


const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const {setToken} = useUserStore();

  React.useEffect(() => {
    const token = localStorage.getItem("token");

    setAuthToken(token);
    setToken(token);
  },[])

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
