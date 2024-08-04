import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlateWheat,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import RecipesCard from "@/shared/RecipesCard";
import {useState} from "react";
import { useRouter } from "next/router";
import { useUser } from "@/hooks/USeUser";

export default function Recipes() {
  const [isSignInOpen, setIsSignInOpen] = useState(false); 
  const router = useRouter();

  useUser();

  const toggleSignIn = () => {
    setIsSignInOpen(!isSignInOpen);
  };

  const handleSignIn = () => {
    
    router.push('/SignIn'); 
  };
  return (
    <div>
      <div className="flex">
        <div className="pl-20 text-green-900">
          <FontAwesomeIcon
            icon={faPlateWheat}
            style={{ color: "#FE5E54", width: "13px" }}
          />
          <strong>TastyCorner</strong>
        </div>
        <div className="pl-80 font-bold">Home</div>
        <div className="px-10 font-bold">Recipe</div>
        <div className="font-bold pr-60">About Us</div>
        <div className="flex items-center flex-col pl-24 relative">
        <FontAwesomeIcon
            icon={faUser}
            className="pt-2 w-3 cursor-pointer"
            onClick={toggleSignIn} 
          />
           <div className="flex flex-col items-center">
            {isSignInOpen && (
              <div className="absolute right-0 mt-2">
                <ul className="list-none m-0 p-0">
                  <li>
                  <button
                className=" text-left px-6 py-2 text-sm text-white bg-green-700 hover:bg-green-600 rounded-xl"
                onClick={handleSignIn}
              >
                Sign In
              </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
      </div>
      </div>

      <div className="pt-12 pl-12 flex">
        <div className="flex flex-col">
          <strong className="text-3xl">Recipes</strong>
          <p className="text-sm font-thin">
            Delicious Creations for Every Occasion
          </p>
        </div>

        <div className="relative pl-[630px]">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-12 py-2 border border-gray-300 rounded-2xl"
          />
          <div className="absolute inset-y-0 right-0 pr-[240px] pb-2 flex items-center pointer-events-none">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#ff8929" }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-12 pl-12">
        <div>
          <RecipesCard img="food 2.webp" title="Creamy Salad" />
          <a href="/CreamySalad"
          className="text-yellow-600 border-b border-yellow-600">View Recipe</a>
        </div>

        <div>
          <RecipesCard img="food 3.jpg" title="Tofu Tomatoes Soup" />
          <a href="/TofuTomatoesSoup"
            className="text-yellow-600 border-b border-yellow-600">View Recipe</a>
        </div>

        <div>
          <RecipesCard img="food 4.jpg" title="Crunch Potatoes" />
          <a href="/CrunchPotatoes"
            className="text-yellow-600 border-b border-yellow-600">View Recipe</a>
        </div>

        <div>
          <RecipesCard img="food 5.webp" title="Mushroom Soup" />
          <a href="/MushroomSoup"
            className=" text-yellow-600 border-b border-yellow-600">View Recipe</a>
        </div>

        <div>
          <RecipesCard img="food 6.jpg" title="Raspberry Pancake" />
          <a href="/RaspberryPancake"
            className=" text-yellow-600 border-b border-yellow-600">View Recipe</a>
        </div>

        <div>
          <RecipesCard img="food 7.jpg" title="Beef Teriyaki" />
          <a
            href="/BeefTeriyaki"
            className="mt-2 text-yellow-600 border-b border-yellow-600">View Recipe</a>
        </div>

        <div>
          <RecipesCard img="food 9.webp" title="Macaroni and Cheese" />
          <a
            href="/MacaroniAndCheese"
            className="mt-2 text-yellow-600 border-b border-yellow-600">View Recipe</a>
        </div>

        <div>
          <RecipesCard img="food 10.webp" title="Kebab" />
          <a
            href="/Kebab"
            className="mt-2 text-yellow-600 border-b border-yellow-600">View Recipe</a>
        </div>

        <div>
          <RecipesCard img="food 11.webp" title="Tuna Mayonnaise Onigiri" />
          <a
            href="/TunaMayonnaiseOnigiri"
            className="mt-2 text-yellow-600 border-b border-yellow-600">View Recipe</a>
        </div>

        <div>
          <RecipesCard img="food 12.webp" title="Egg Chicken Roll" />
          <a
            href="/EggChickenRoll"
            className="mt-2 text-yellow-600 border-b border-yellow-600">View Recipe</a>
        </div>

        <div>
          <RecipesCard img="food 13.webp" title="French Toast" />
          <a
            href="/FrenchToast"
            className="mt-2 text-yellow-600 border-b border-yellow-600">View Recipe</a>
        </div>

        <div>
          <RecipesCard img="food 14.webp" title="Mapo Tofu" />
          <a
            href="/MapoTofu"
            className="mt-2 text-yellow-600 border-b border-yellow-600">View Recipe</a>
        </div>
      </div>

      <div className="pt-12 px-10">
        <FontAwesomeIcon
          icon={faPlateWheat}
          style={{ color: "#FE5E54", width: "13px" }}
        />
        <strong>TastyCorner</strong>
      </div>

      <div className="pl-12 pt-8 flex">
        <ul>
          <li className="font-bold pr-20">Menu</li>
          <li>Home</li>
          <li>Recipe</li>
          <li>About Us</li>
        </ul>

        <ul>
          <li className="font-bold pr-20">Categories</li>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
          <li>Dessert</li>
          <li>Drink</li>
        </ul>

        <ul>
          <li className="font-bold">Social</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Youtube</li>
          <li>Facebook</li>
        </ul>

        <div className="flex flex-col items-center justify-center pb-16">
          <strong className="pl-80">Sign up to Write Your Recipe</strong>
          <a
            className="mt-6 px-8 py-2 bg-yellow-600 rounded-2xl text-white ml-[230px]"
            href="/SignUp"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

