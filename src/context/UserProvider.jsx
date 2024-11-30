import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
export const userContext = createContext();

export const useUser = () => useContext(userContext);

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const localValue = localStorage.getItem("USERS");
    if (localValue == null) {
      return {};
    }
    return JSON.parse(localValue);
  });
  const [message, setMessage] = useState(null);

  useEffect(() => {
    localStorage.setItem("USERS", JSON.stringify(users));
  }, [users]);

  const createNewAccount = async (userData) => {
    const { data } = await axios.post(
      "http://localhost:8000/api/register",
      userData
    );
    setMessage(data);
  };

  const [user, setUser] = useState(() => {
    const localValue = localStorage.getItem("USER");
    if (localValue == null) {
      return null;
    }
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("USER", JSON.stringify(user));
  }, [user]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const [loginError, setLoginError] = useState(false);

  const userLogin = async (userData) => {
    const { data } = await axios.post(
      "http://localhost:8000/api/login",
      userData,
      {
        withCredentials: true,
      }
    );
    console.log(data);
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
        user,
        handleLogout,
        loginError,
        message,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
