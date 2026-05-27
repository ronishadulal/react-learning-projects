import React from "react";
import { FiArchive, FiMessageSquare, FiSettings } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Thinbar = () => {
  return (
    <div className=" top-0 left-0 h-screen w-[5%] min-w-[60px] bg-[#202c33] flex flex-col  items-center py-4">
      
      {/* Top Section */}
      <div className="flex flex-col items-center gap-8 text-gray-300 text-2xl mb-5">
        <FiMessageSquare className="cursor-pointer hover:text-white transition" />
        <FiArchive className="cursor-pointer hover:text-white transition" />
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center gap-8 text-gray-300 text-2xl m-5">
        <FaUserCircle className="cursor-pointer hover:text-white transition" />
        <FiSettings className="cursor-pointer hover:text-white transition" />
      </div>

    </div>
  );
};

export default Thinbar;