import Recipes from "@/sections/dashboard/routes/Recipes";
import { useUser } from "@/hooks/USeUser";

export default function Home() {
    useUser();

    return(
        <Recipes/>
    )
}