import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlateWheat, faUser } from "@fortawesome/free-solid-svg-icons";
import Macaroni from "@/sections/recipe/components/MacaroniInstructions";

export default function MacaroniAndCheese() {
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
        <FontAwesomeIcon icon={faUser} className="pt-2 w-3 pl-48" />
      </div>

      <div className="flex">
        <img
          src="food 9.webp"
          alt="food 9"
          height={150}
          width={350}
          className="pl-12 pt-8"
        />

        <div className="flex flex-col pl-12 pt-8">
          <p className="font-thin text-xs ">Food Name</p>
          <strong className="text-3xl">Macaroni And Cheese</strong>

          <p className="font-thin text-xs pt-2">Author</p>
          <strong>Sarah Anderson</strong>

          <p className="font-thin text-xs pt-2 ">Date</p>
          <strong>11 february 2024</strong>

          <p className="font-thin text-xs pt-2 ">Category</p>
          <strong>Breakfast</strong>
        </div>
      </div>

      <div className="bg-white border border gray-200 shadow-md p-4 rounded-2xl my-12 mx-12">
        <strong className="text-xl">ingredients:</strong>
        <ul className="list-disc pl-12 text-sm">
          <li>
            8 ounces (about 2 cups) elbow macaroni or any pasta shape you prefer
          </li>
          <li>2 cups shredded sharp cheddar cheese</li>
          <li>1/2 cup grated Parmesan cheese</li>
          <li>3 cups milk (preferably whole milk)</li>
          <li>1/4 cup unsalted butter</li>
          <li>1/4 cup all-purpose flour</li>
          <li>1/2 teaspoon salt, or more to taste</li>
          <li>1/4 teaspoon black pepper, or more to taste</li>
          <li>1/4 teaspoon paprika (optional, for color and flavor)</li>
          <li>1/4 teaspoon garlic powder (optional, for extra flavor)</li>
          <li>1/2 cup breadcrumbs (optional, for topping)</li>
        </ul>

        <Macaroni />

        <p className="pt-4">
          Enjoy your delicious homemade macaroni and cheese!
        </p>
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
          <li className="font-bold pr-20 ">Menu</li>
          <li>Home</li>
          <li>Recipe</li>
          <li>About Us</li>
        </ul>

        <ul>
          <li className="font-bold pr-20 ">Categories</li>
          <li>Breakfast</li>
          <li>Lunch</li>
          <li>Dinner</li>
          <li>Dessert</li>
          <li>Drink</li>
        </ul>

        <ul>
          <li className="font-bold ">Social</li>
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
