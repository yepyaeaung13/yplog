import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import NavtabProvider from "./context/NavtabProvider";
import PostProvider from "./context/PostProvider";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import UserProvider from "./context/UserProvider";
import RegisterSuccess from "./components/RegisterSuccess";
import Profile from "./components/Profile";
import CreatePost from "./components/CreatePost";
import MyPosts from "./components/MyPosts";
import MobileMenu from "./components/MobileMenu";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="font-sans">
      <BrowserRouter>
        <UserProvider>
          <PostProvider>
            <NavtabProvider>
              <Header handleOpen={handleOpen} />
              {isOpen && <MobileMenu handleOpen={handleOpen} />}
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/post" element={<Post />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route
                  path="/register/success"
                  element={<RegisterSuccess />}
                ></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/create-post" element={<CreatePost />}></Route>
                <Route path="/my-posts" element={<MyPosts />}></Route>
              </Routes>
              {/* <Footer /> */}
            </NavtabProvider>
          </PostProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
