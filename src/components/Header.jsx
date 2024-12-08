import React from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import IconMenu from "./icons/IconMenu";
import IconLogo from "./icons/IconLogo";
import IconSearch from "./icons/IconSearch";

const Header = ({ handleOpen }) => {
  const { pathname } = useLocation();

  if (pathname === "/login" || pathname === "/register") return null;

  return (
    <header className="w-full sticky top-0 left-0 py-4 z-10 bg-containerColor shadow-md">
      <Container>
        <div className="flex justify-between items-center">
          <Link
            to={"/"}
            href=""
            className="text-white flex gap-1 items-center font-bold font-sans 2xl:text-5xl text-3xl"
          >
            <IconLogo />
            YP<span className="text-secondColor">log</span>
          </Link>
          <div className="relative flex items-center bg-gradient-to-r rounded-md border md:border-zinc-700 border-containerColor from-zinc-500 via-containerColor to-containerColor">
            <input
              type="search"
              name=""
              id=""
              placeholder="Find topics that interest you..."
              className="outline-none max-sm:w-40 rounded-md pl-9 px-2 py-1 placeholder:text-xs placeholder:text-gray-400 bg-transparent text-white"
            />
            <i className="absolute left-2">
              <IconSearch />
            </i>
            {/* mobile menu  */}
            <div className="md:hidden flex items-center">
              <button
                onClick={handleOpen}
                className="active:scale-95 duration-150"
              >
                <IconMenu />
              </button>
            </div>
          </div>

          <div className="max-sm:hidden">
            <Navbar />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
