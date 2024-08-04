import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlateWheat,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import RecipesCard from "@/shared/RecipesCard";
import { useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@/hooks/USeUser";

export default function Recipes() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const router = useRouter();

  useUser();


  const recipes = [
    { img: "food 2.webp", title: "Creamy Salad", href: "/CreamySalad" },
    { img: "food 3.jpg", title: "Tofu Tomatoes Soup", href: "/TofuTomatoesSoup" },
    { img: "food 4.jpg", title: "Crunch Potatoes", href: "/CrunchPotatoes" },
    { img: "food 5.webp", title: "Mushroom Soup", href: "/MushroomSoup" },
    { img: "food 6.jpg", title: "Raspberry Pancake", href: "/RaspberryPancake" },
    { img: "food 7.jpg", title: "Beef Teriyaki", href: "/BeefTeriyaki" },
    { img: "food 9.webp", title: "Macaroni and Cheese", href: "/MacaroniAndCheese" },
    { img: "food 10.webp", title: "Kebab", href: "/Kebab" },
    { img: "food 11.webp", title: "Tuna Mayonnaise Onigiri", href: "/TunaMayonnaiseOnigiri" },
    { img: "food 12.webp", title: "Egg Chicken Roll", href: "/EggChickenRoll" },
    { img: "food 13.webp", title: "French Toast", href: "/FrenchToast" },
    { img: "food 14.webp", title: "Mapo Tofu", href: "/MapoTofu" }
  ];

  const handleSignIn = () => {
    router.push('/SignIn');
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
  
    const results = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term)
    );
    setFilteredRecipes(results);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center p-4 bg-white shadow-md">
        <div className="flex items-center pl-4 text-green-900">
          <FontAwesomeIcon
            icon={faPlateWheat}
            style={{ color: "#FE5E54", width: "20px" }}
          />
          <strong className="ml-2">TastyCorner</strong>
        </div>
        <div className="flex-grow text-center font-bold py-2">
          <a href="/">Home</a>
        </div>
        <div className="flex-grow text-center font-bold py-2">
          <a href="/recipes">Recipe</a>
        </div>
        <div className="flex-grow text-center font-bold py-2">
          <a href="/about">About Us</a>
        </div>
        <div className="relative flex items-center justify-center pl-4">
          <FontAwesomeIcon
            icon={faUser}
            className="text-xl cursor-pointer"
            onClick={() => setIsSignInOpen(!isSignInOpen)}
          />
          {isSignInOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-xl">
              <ul className="list-none m-0 p-0">
                <li>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-white bg-green-700 hover:bg-green-600 rounded-xl"
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

      <div className="pt-12 px-4 flex flex-col md:flex-row items-center">
        <div className="flex flex-col flex-grow">
          <strong className="text-3xl">Recipes</strong>
          <p className="text-sm font-thin">Delicious Creations for Every Occasion</p>
        </div>
        <div className="relative mt-4 md:mt-0 md:ml-4 w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 pr-12 py-2 border border-gray-300 rounded-2xl w-full"
          />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#ff8929" }}
            />
          </div>
          {searchTerm && filteredRecipes.length > 0 && (
            <div className="absolute mt-2 w-full bg-white shadow-md rounded-xl">
              <ul className="list-none m-0 p-2">
                {filteredRecipes.map((recipe, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-100">
                    <a href={recipe.href} className="text-blue-600">{recipe.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {recipes.map((recipe, index) => (
          <div key={index} className="flex flex-col items-start">
            <RecipesCard img={recipe.img} title={recipe.title} />
            <a
              href={recipe.href}
              className="text-yellow-600 border-b border-yellow-600 mt-2"
            >
              View Recipe
            </a>
          </div>
        ))}
      </div>

    
      <div className="pt-12 px-4 bg-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <FontAwesomeIcon
              icon={faPlateWheat}
              style={{ color: "#FE5E54", width: "20px" }}
            />
            <a href="/" className="ml-2 font-bold">TastyCorner</a>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <ul className="list-none m-0 p-0">
              <li className="font-bold">Menu</li>
              <li><a href="/">Home</a></li>
              <li><a href="/recipes">Recipe</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
            <ul className="list-none m-0 p-0">
              <li className="font-bold">Categories</li>
              <li>Breakfast</li>
              <li>Lunch</li>
              <li>Dinner</li>
              <li>Dessert</li>
              <li>Drink</li>
            </ul>
            <ul className="list-none m-0 p-0">
              <li className="font-bold">Social</li>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://youtube.com">YouTube</a></li>
              <li><a href="https://facebook.com">Facebook</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center mt-8">
            <strong className="mb-4">Sign up to Write Your Recipe</strong>
            <a
              href="/SignUp"
              className="px-8 py-2 bg-yellow-600 rounded-2xl text-white"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
