import React, { useContext, useState } from "react";
import { NavtabContext } from "../context/NavtabProvider";

const Navtab = () => {
  const { tabs, handleActive } = useContext(NavtabContext);
  return (
    <ul
      className="flex gap-5 items-center 2xl:text-lg text-white overflow-x-auto"
      style={{ scrollbarWidth: "none" }}
    >
      {tabs.map((tab, idx) => (
        <li
          key={idx}
          onClick={() => {
            handleActive(tab.title);
          }}
          className={`cursor-pointer px-2 hover:text-white border-b-2 hover:border-secondColor duration-200 ${
            tab.active
              ? "border-secondColor text-white"
              : "text-gray-300 border-containerColor"
          }`}
        >
          {tab.title}
        </li>
      ))}
    </ul>
  );
};

export default Navtab;
