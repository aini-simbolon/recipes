import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlateWheat, faBook } from "@fortawesome/free-solid-svg-icons";
import { RiDashboardLine } from "react-icons/ri";

const SideBar = () => {
  return (
    <div className="bg-white border border-gray-200 shadow-xl rounded-2xl pt-4 w-full h-[585px] max-w-[180px] flex-shrink-0">
      <div className="flex items-center mb-4 pl-4">
        <FontAwesomeIcon icon={faPlateWheat} className="text-orange-500" style={{ width: "13px" }} />
        <strong className="text-green-700 text-xl">TastyCorner</strong>
      </div>

      <div className="flex flex-col pl-4 pt-8">
        <a href="/Dashboard" className="mb-2 hover:text-green-700 flex items-center">
          <RiDashboardLine className="mr-2" /> Dashboard
        </a>
        <a href="/" className="mb-2 hover:text-green-700 flex items-center">
          <FontAwesomeIcon icon={faBook} className="mr-2" /> Recipe
        </a>
      </div>
    </div>
  );
};

export default SideBar;
