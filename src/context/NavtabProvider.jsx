import React, { createContext, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export const NavtabContext = createContext();

const NavtabProvider = ({ children }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = params.get("category") || "All";

  const [tabs, setTabs] = useState([
    { title: "All", active: false },
    { title: "Tutorials", active: false },
    { title: "React JS", active: false },
    { title: "Node JS", active: false },
  ]);

  const handleActive = (cat) => {
    setSearchParams({ category: cat.toLowerCase() });
  };

  useEffect(() => {
    if (category) {
      setTabs((currentTabs) => {
        return currentTabs.map((tab, idx) => {
          if (tab.title.toLowerCase() === category.toLowerCase()) {
            tab.active = true;
          } else {
            tab.active = false;
          }
          return tab;
        });
      });
    }
  }, [category]);

  return (
    <NavtabContext.Provider value={{ tabs, handleActive }}>
      {children}
    </NavtabContext.Provider>
  );
};

export default NavtabProvider;
