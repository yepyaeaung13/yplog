import React from "react";
import IconCross from "./icons/IconCross";
import { Link } from "react-router-dom";

const MobileMenu = ({ handleOpen }) => {
  return (
    <div className="md:hidden fixed top-0 left-0 z-50 duration-500 ease-in-out transition-all text-white bg-containerColor w-full h-dvh">
      <div className="p-5 flex justify-end">
        <button onClick={handleOpen}>
          <IconCross />
        </button>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Link to={"/login"} onClick={handleOpen}>
          Login
        </Link>
        <Link to={"/register"} onClick={handleOpen}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
