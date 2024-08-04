import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlateWheat, faUser } from "@fortawesome/free-solid-svg-icons";
import TextField from "../sections/auth/components/TextField";
import { UseSignUp } from "../sections/auth/hooks/UseSignUp";
export default function SignUp() {
  const {  errors, handleOnChange, handleSubmit,form } = UseSignUp();
 
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
        <div className="font-bold pr-64">About Us</div>
        <FontAwesomeIcon icon={faUser} className="pt-2 w-3 pl-48" />
      </div>

      <div className="bg-white border shadow-lg p-4 rounded-2xl mt-16 mx-[470px] text-center">
        <p className="mb-4 py-8 text-2xl text-yellow-500 font-bold">Sign Up</p>
        <form className="w-64 mx-auto">
          <TextField
            type="text"
            placeholder="FullName"
            onChange={handleOnChange}
            name="fullName"
            value={form.fullName}
            error={errors.fullName}
          />

          <TextField
            type="text"
            placeholder="Email"
            onChange={handleOnChange}
            name="email"
            value={form.email}
            error={errors.email}
          />

          <TextField
            type="password"
            placeholder="Password"
            onChange={handleOnChange}
            name="password"
            value={form.password}
            error={errors.password}
          />

          <div className="pt-8 pb-4">
            <button
              onClick={handleSubmit}
              type="button"
              className="w-full bg-green-700 text-white px-4 py-2  rounded-xl hover:bg-green-600"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-xs">
          Already have Account?{" "}
          <span className="text-yellow-500">
            <a href="/SignIn">Sign In</a>
          </span>
        </p>
      </div>

      <div className="pt-12 px-10">
        <FontAwesomeIcon
          icon={faPlateWheat}
          style={{ color: "#FE5E54", width: "13px" }}
        />
        <strong className="text-green-700">TastyCorner</strong>
      </div>

      <div className="pl-12 pt-8 flex">
        <ul>
          <li className="font-bold pr-20 ">Menu</li>
          <li className="hover:text-green-700">
            <a href="/reader">Home</a>
          </li>
          <li className=" hover:text-green-700">
            <a href="/Recipes">Recipe</a>
          </li>
          <li>About Us</li>
          <li className="hover:text-green-700">
            <a href="/SignIn">Sign In</a>
          </li>
          <li className="hover:text-green-700">
            <a href="/SignUp">Sign Up</a>
          </li>
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
            href="/SignUp"
            className="mt-6 px-8 py-2 bg-yellow-600 rounded-2xl text-white ml-[230px]"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
