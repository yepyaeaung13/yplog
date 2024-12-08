import React from "react";
import { Link } from "react-router-dom";

const BackToHome = () => {
  return (
    <div className="group absolute max-sm:left-3 top-5 cursor-pointer left-0 flex text-secondColor font-medium hover:text-containerColor duration-200">
      <Link to={"/"} className="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="md:w-[1vw] sm:w-[2vw] w-[3vw]"
        >
          {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            fill="#fd8f44"
            className="group-hover:fill-containerColor duration-200"
          />
        </svg>
        <span className="text-sm">back</span>
      </Link>
    </div>
  );
};

export default BackToHome;
