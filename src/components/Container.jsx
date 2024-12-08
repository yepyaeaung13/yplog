import React from "react";

const Container = ({ children }) => {
  return (
    <div className="relative md:w-[85vw] w-full px-2 mx-auto">{children}</div>
  );
};

export default Container;
