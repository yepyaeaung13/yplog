import React from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-3 z-10 bg-containerColor">
      <Container>
        <div className="flex justify-between items-center">
          <Link
            to={"/"}
            href=""
            className="text-white font-bold font-sans 2xl:text-5xl text-3xl"
          >
            B<span className="text-secondColor">log</span>
          </Link>
          <Navbar />
        </div>
      </Container>
    </header>
  );
};

export default Header;
