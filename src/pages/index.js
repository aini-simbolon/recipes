import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlateWheat, faUser, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import RecipesCard from "../shared/RecipesCard";
import { useUser } from "@/hooks/USeUser";
import { useRouter } from "next/router";

export default function Reader() {

  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(prevLiked => !prevLiked); 
  };

  const [loved, setLoved] = useState(false);

  const handleLovedClick = () => {
    setLoved(prevLoved => !prevLoved); 
  };


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
          <strong className="text-green-700">TastyCorner</strong>
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
      
      <div>
        <img
          src="/tomat.jpeg"
          alt="tomat"
          width={30}
          height={20}
          className="absolute left-[450px] top-32 "
        />
        <div className="flex pt-32 pl-10">
          <p className="text-5xl font-bold  ">
            Cooking Made Fun
            <br /> and Easy: Unleash
            <br /> Your Inner Chef
          </p>
          <div
            className="absolute right-96 top-20 bg-cover h-96 w-96 bg-center"
            style={{ backgroundImage: `url("/food 1.png")` }}
          >
            <div className="bg-white rounded-xl mt-56 w-[218px] h-[200px] border shadow-lg">
              <div className="ml-2 mt-2 bg-gray-100 w-[200px] h-[140px] rounded-xl pl-6">
                <p className="pt-4">
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{
                      color: "#FFD43B",
                      paddingRight: "3px",
                      width: "15px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{
                      color: "#FFD43B",
                      paddingRight: "3px",
                      width: "15px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{
                      color: "#FFD43B",
                      paddingRight: "3px",
                      width: "15px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{
                      color: "#FFD43B",
                      paddingRight: "3px",
                      width: "15px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{
                      color: "#FFD43B",
                      paddingRight: "3px",
                      width: "15px",
                    }}
                  />
                  <br />
                  "The recipes here are
                  <br />
                  not only delicious but
                  <br />
                  also easy to follow"
                </p>
              </div>
              <div className="flex">
                <img
                  src="orang 1.jpeg"
                  height={25}
                  width={30}
                  className="ml-4 mt-2"
                />
                <strong className="pl-2 pr-16 pt-3">Sarah M.</strong>
                 <FontAwesomeIcon
                  icon={liked ? fasHeart : farHeart}
                  className={`pt-4 cursor-pointer ${liked ? 'text-red-800' : 'text-gray-500'}`}
                  onClick={handleLikeClick} 
                  />
              </div>
            </div>

            <div className="absolute right-96 top-20 bg-cover h-96 w-96 bg-center">
              <div className="bg-white rounded-xl mt-20 ml-[650px] w-[218px] h-[220px] border shadow-lg">
                <div className="ml-2 mt-2 bg-gray-100 w-[200px] h-[140px] rounded-xl pl-6">
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{
                      color: "#FFD43B",
                      paddingRight: "3px",
                      width: "15px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{
                      color: "#FFD43B",
                      paddingRight: "3px",
                      width: "15px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{
                      color: "#FFD43B",
                      paddingRight: "3px",
                      width: "15px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{
                      color: "#FFD43B",
                      paddingRight: "3px",
                      width: "15px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{
                      color: "#FFD43B",
                      paddingRight: "3px",
                      width: "15px",
                    }}
                  />
                  <br />
                  "The recipes here are <br />
                  not only delicious but <br />
                  also easy to follow"
                </div>
                <div className="flex items-center mt-4">
                  <img
                    src="orang 2.jpeg"
                    height={25}
                    width={30}
                    className="ml-4 mt-2"
                  />
                  <strong className="pl-2 pr-16 pt-3">Farellin J.</strong>
                  <FontAwesomeIcon
                    icon={loved ? fasHeart : farHeart}
                   className={`pt-4 cursor-pointer ${loved ? 'text-red-800' : 'text-gray-500'}`}
                   onClick={handleLovedClick}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="pl-10 text-xs pt-4">
            Discover more than{" "}
            <span className="text-yellow-600">10,000 recipes</span> in your hand
            with the
            <br /> best recipes.Help you to find the easiest way to cook
          </p>

          <img
            src="/bawang putih.jpeg"
            alt="bawang"
            width={50}
            height={35}
            className=""
          />

          <a
            href="/Recipes"
            className="px-8 py-4 bg-yellow-600 rounded-2xl ml-12 mt-20 text-white"
          >
            Explore Recipes
          </a>
        </div>
      </div>

      <div className="max-w-4xl flex md:flex-row items-start justify-between pt-56 ">
        <div>
          <p className="font-bold text-3xl pl-12">Discover, Create, Share</p>
          <p className="text-base pl-12 ">
            Check our most popular recipes of this week
          </p>
        </div>
        <a
          href="/Recipes"
          className="bg-yellow-600 px-8 py-2 rounded-2xl text-white"
        >
          See All
        </a>
      </div>

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
  <div className="flex flex-col items-start">
    <RecipesCard img="food 2.webp" title="Creamy Salad" />
    <a
      href="/CreamySalad"
      className="text-yellow-600 border-b border-yellow-600 mt-2"
    >
      View Recipe
    </a>
  </div>

  <div className="flex flex-col items-start">
    <RecipesCard img="food 3.jpg" title="Tofu Tomatoes Soup" />
    <a
      href="/TofuTomatoesSoup"
      className="text-yellow-600 border-b border-yellow-600 mt-2"
    >
      View Recipe
    </a>
  </div>

  <div className="flex flex-col items-start">
    <RecipesCard img="food 4.jpg" title="Crunch Potatoes" />
    <a
      href="/CrunchPotatoes"
      className="text-yellow-600 border-b border-yellow-600 mt-2"
    >
      View Recipe
    </a>
  </div>

  <div className="flex flex-col items-start">
    <RecipesCard img="food 5.webp" title="Mushroom Soup" />
    <a
      href="/MushroomSoup"
      className="text-yellow-600 border-b border-yellow-600 mt-2"
    >
      View Recipe
    </a>
  </div>

  <div className="flex flex-col items-start">
    <RecipesCard img="food 6.jpg" title="Raspberry Pancake" />
    <a
      href="/RaspberryPancake"
      className="text-yellow-600 border-b border-yellow-600 mt-2"
    >
      View Recipe
    </a>
  </div>

  <div className="flex flex-col items-start">
    <RecipesCard img="food 7.jpg" title="Beef Teriyaki" />
    <a
      href="/BeefTeriyaki"
      className="text-yellow-600 border-b border-yellow-600 mt-2"
    >
      View Recipe
    </a>
  </div>
</div>

      <div className="relative w-full mt-36" style={{ height: "350px" }}>
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `url("/food 8.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100%",
      zIndex: -1,
    }}
  ></div>

  <div
    className="bg-white rounded-xl p-6 absolute top-12 left-12"
    style={{ width: "300px" }}
  >

    <strong className="block mt-2">About Us</strong>
    <p className="mt-2">
      Our recipes are the heart and soul of our culinary 
      community, and they reflect our commitment to 
      providing you with memorable and delightful dining 
      experiences.
    </p>
  </div>

  <div
    className="bg-white text-green-700 rounded-3xl py-6 px-8 absolute bottom-12 right-12"
    style={{ width: "300px" }} 
  >
    <p>
      50+ Quick Food Recipes
      <br />
      That Easy To Do!
    </p>
  </div>
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
