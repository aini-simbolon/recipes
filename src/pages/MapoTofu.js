import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlateWheat, faUser } from "@fortawesome/free-solid-svg-icons";
import Mapo from "@/sections/recipe/components/MapoInstructions";

export default function MapoTofu() {
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
          src="food 14.webp"
          alt="food 14"
          height={100}
          width={300}
          className="pl-12 pt-8"
        />

        <div className="flex flex-col pl-12 pt-8">
          <p className="font-thin text-xs ">Food Name</p>
          <strong className="text-3xl">Mapo Tofu</strong>

          <p className="font-thin text-xs pt-2">Author</p>
          <strong>Sarah Anderson</strong>

          <p className="font-thin text-xs pt-2 ">Date</p>
          <strong>15 february 2024</strong>

          <p className="font-thin text-xs pt-2 ">Category</p>
          <strong>Lunch</strong>
        </div>
      </div>

      <div className="bg-white border border gray-200 shadow-md p-4 rounded-2xl my-12 mx-12">
        <strong className="text-xl">ingredients:</strong>
        <ul className="list-disc pl-12 text-sm">
          <li>1 block (about 14 oz or 400g) soft tofu, cut into cubes</li>
          <li>150g ground pork (or substitute with ground chicken or beef)</li>
          <li>2-3 cloves garlic, minced</li>
          <li>1 tablespoon ginger, minced</li>
          <li>
            2 green onions, finely chopped (separate white and green parts)
          </li>
          <li>2 tablespoons vegetable oil</li>
          <li>2 tablespoons doubanjiang (fermented broad bean paste)</li>
          <li>1 tablespoon chili bean paste (optional, for extra spiciness)</li>
          <li>1 cup chicken or vegetable broth</li>
          <li>1 tablespoon soy sauce</li>
          <li>1 teaspoon sugar</li>
          <li>
            1/2 teaspoon ground Sichuan peppercorns (optional, for numbing
            flavor)
          </li>
          <li>
            1 tablespoon cornstarch mixed with 2 tablespoons water (for
            thickening)
          </li>
          <li>Salt to taste</li>
          <li>Cooked rice, for serving</li>
        </ul>

        <Mapo />

        <p className="pt-4">
          Enjoy your homemade Mapo Tofu! Adjust the spiciness level according to
          your preference by adjusting the amount of chili bean paste and
          Sichuan peppercorns.
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
