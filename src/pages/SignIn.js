import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlateWheat, faUser } from "@fortawesome/free-solid-svg-icons";
import TextField from "../sections/auth/components/TextField";
import { UseSignIn } from "../sections/auth/hooks/USeSignIn"

export default function SignIn() {
  const { errors, handleOnChange, handleSubmit, form } = UseSignIn();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="flex flex-wrap items-center justify-between p-4 text-black shadow-md">
        <div className="flex items-center text-black">
          <FontAwesomeIcon icon={faPlateWheat} className="text-red-500 w-5" />
          <strong className="text-green-700 text-lg ml-2">TastyCorner</strong>
        </div>
        <nav className="flex space-x-4 text-sm md:text-base">
          <a href="/" className="hover:text-black-300">Home</a>
          <a href="/Recipes" className="hover:text-black-300">Recipe</a>
          <a href="/About" className="hover:text-black-300">About Us</a>
          <a href="/SignIn" className="hover:text-black-300">Sign In</a>
        </nav>
        <FontAwesomeIcon icon={faUser} className="text-black-300 w-6" />
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white border shadow-lg p-6 rounded-lg max-w-md w-full mx-auto">
          <p className="mb-4 text-2xl text-yellow-500 font-bold text-center">Sign In</p>
          <form className="space-y-4">
            <TextField
              type="text"
              placeholder="Email"
              onChange={handleOnChange}
              name="email"
              value={form.email}
              error={errors.email}
              className="w-full"
            />
            <TextField
              type="password"
              placeholder="Password"
              onChange={handleOnChange}
              name="password"
              value={form.password}
              error={errors.password}
              className="w-full"
            />
            <button
              onClick={handleSubmit}
              type="button"
              className="w-full bg-green-700 text-white px-4 py-2 rounded-xl hover:bg-green-600"
            >
              Sign In
            </button>
          </form>
          <p className="text-xs text-center mt-4">
            Don't have an Account?{" "}
            <a href="/SignUp" className="text-yellow-500 hover:underline">Sign Up</a>
          </p>
        </div>
      </main>

      <footer className="bg-white p-4">
        <div className="flex flex-col items-start max-w-md mx-auto">
          <FontAwesomeIcon icon={faPlateWheat} className="text-red-500 w-5" />
          <strong className="text-green-700 text-lg">TastyCorner</strong>
          <div className="flex flex-col items-start mt-4">
            <p className="font-bold mb-2">Sign up to Write Your Recipe</p>
            <a
              href="/SignUp"
              className="px-6 py-2 bg-yellow-600 rounded-2xl text-white hover:bg-yellow-500"
            >
              Sign Up
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
