import React, { createContext, useEffect, useState } from "react";
import { redirect } from "react-router-dom";
export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const localValue = localStorage.getItem("USERS");
    if (localValue == null) {
      return [];
    }
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("USERS", JSON.stringify(users));
  }, [users]);

  const createNewAccount = (userData) => {
    setUsers([...users, { ...userData, createdDate: Date().slice(0, 15) }]);
  };
  const [currentLogin, setCurrentLogin] = useState(() => {
    const localValue = localStorage.getItem("CurrentLogin");
    if (localValue == null) {
      return null;
    }
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("CurrentLogin", JSON.stringify(currentLogin));
  }, [currentLogin]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const [loginError, setLoginError] = useState(false);

  const userLogin = (user) => {
    setUsers((currentUsers) => {
      return currentUsers.map((currentUser) => {
        if (
          currentUser.email === user.email &&
          currentUser.password === user.password
        ) {
          setCurrentLogin({ ...currentUser });
          location.pathname = "/";
        } else {
          setLoginError(true);
        }
        return currentUser;
      });
    });
  };
  const userLogout = () => {
    setCurrentLogin(null);
  };
  const handleLogout = () => {
    toggleOpen();
    userLogout();
  };
  return (
    <userContext.Provider
      value={{
        users,
        createNewAccount,
        isOpen,
        toggleOpen,
        userLogin,
        currentLogin,
        handleLogout,
        loginError,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
