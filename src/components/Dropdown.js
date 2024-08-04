import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useRouter} from "next/router";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("authToken");
    router.push("/SignIn");
  };

  return (
    <div className="relative flex-grow pt-4">
      <div className="flex justify-end mb-4">
        <img
          src="orang 3.jpeg"
          alt="User Avatar"
          height={25}
          width={25}
          className="rounded-full mr-2"
        />
        <strong className="text-sm">Sarah Anderson</strong>
        <FontAwesomeIcon
          icon={faAngleDown}
          style={{ color: "#a0a0a2", strokeWidth: 1 }}
          className="ml-2 text-lg cursor-pointer"
          onClick={toggleDropdown}
        />
      </div>
      
      {isOpen && (
        <div className="absolute right-0">
          <ul className="list-none m-0 p-0">
            <li>
              <button
                className=" text-left px-6 rounded-xl py-2 text-sm text-white bg-green-700 hover:bg-green-600"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
