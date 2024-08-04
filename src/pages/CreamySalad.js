import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlateWheat, faUser } from "@fortawesome/free-solid-svg-icons";
import Instructions from "@/sections/recipe/components/InstructionsCard";

export default function CreamySalad() {
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
          src="food 2.webp"
          alt="food 2"
          height={750}
          width={450}
          className="pl-12 pt-8"
        />

        <div className="flex flex-col pl-12 pt-8">
          <p className="font-thin text-xs ">Food Name</p>
          <strong className="text-3xl">Creamy Salad</strong>

          <p className="font-thin text-xs pt-2">Author</p>
          <strong>Sarah Anderson</strong>

          <p className="font-thin text-xs pt-2 ">Date</p>
          <strong>15 January 2024</strong>

          <p className="font-thin text-xs pt-2 ">Category</p>
          <strong>Breakfast</strong>
        </div>
      </div>

      <div>
        <div className="bg-white border border-gray-200 shadow-md p-4 rounded-2xl my-12 mx-12">
          <strong className="text-xl">Ingredients:</strong>
          <p className="font-bold pt-4 text-base ">For the Salad:</p>
          <ul className="list-disc pl-12 text-sm">
            <li>2 cups mixed greens (lettuce, spinach, arugula, etc.)</li>
            <li>1 cup cheery tomatoes, halved</li>
            <li>1 cucumber, sliced</li>
            <li>1 red bell pepper, chopped</li>
            <li>1/2 red onion, thinly sliced</li>
            <li>1 cup cooked chicken breast, diced (optional)</li>
            <li>1/2 cup shredded carrots</li>
            <li>1/4 cup sliced black olive</li>
            <li>1/4 cup crumbled feta cheese</li>
          </ul>

          <p className="font-bold text-base">For the Creamy Dressing:</p>
          <ul className="list-disc pl-12 text-sm">
            <li>1/2 cup mayonnaise</li>
            <li>1/4 cup Greek yogurt</li>
            <li>1 tablespoon Dijon mustard</li>
            <li>1 tablespoon lemon juice</li>
            <li>1 teblespoon apple cider vinegar</li>
            <li>1 clove garlic, minced</li>
            <li>1 teblespoon fresh dill, chopped (or 1 teaspoon dried dill)</li>
            <li>Salt and papper to taste</li>
          </ul>

          <Instructions />

          <strong>Notes:</strong>
          <ul className="list-disc px-12 text-sm">
            <li>
              Variations: Feel free to customize the salad by adding other
              ingredients like avocado , bacon bits, or croutons,
            </li>
            <li>
              Storage: If you have leftover, store the salad and dressing
              separately to prevent the greens from getting soggy. The salad can
              be stored in the refrigerator for up to 2 days, and the dressing
              can be stored in an airtight container for up to a week.
            </li>
            <li>
              Vegetarian Option: Skip the chicken for a vegetarian version.
            </li>
          </ul>

          <p className="pt-4 text-sm">
            Enjoy your delicious and refreshing Creamy Salad!
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
    </div>
  );
}
