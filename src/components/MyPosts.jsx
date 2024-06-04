import React, { useContext, useState } from "react";
import Container from "./Container";
import { postContext } from "../context/PostProvider";
import { Link } from "react-router-dom";
import { userContext } from "../context/UserProvider";
import Navtab from "./Navtab";

const MyPosts = () => {
  const { filterPost, handlePost, posts } = useContext(postContext);
  const { currentLogin } = useContext(userContext);
  return (
    <div className="mt-12">
      <Container>
        <div className="md:w-[75%] w-[100%] mb-10 flex flex-col items-center mx-auto bg-zinc-50 shadow-lg rounded-lg p-5">
          <div className="flex flex-col gap-3 items-center h-full -mt-11">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-24 pointer-events-none"
              >
                {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path
                  d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"
                  fill="#fd8f44"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl">{currentLogin.name}</h1>
            </div>
            <div className="w-80 flex gap-5 justify-between my-5">
              <div className="flex flex-col items-center text-lg font-semibold">
                <span>65</span>
                <span>Followers</span>
              </div>
              <div className="flex flex-col items-center text-lg font-semibold">
                <span>
                  {
                    posts.filter((post) => post.author === currentLogin.name)
                      .length
                  }
                </span>
                <span>Posts</span>
              </div>
            </div>
            <div className="flex text-secondColor font-medium mt-auto">
              <Link to={"/"} className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="md:w-[1vw] sm:w-[2vw] w-[3vw]"
                >
                  {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                  <path
                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                    fill="#fd8f44"
                  />
                </svg>
                <span className="text-sm">back to Home</span>
              </Link>
            </div>
          </div>
        </div>
        <Navtab />
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 my-5">
          {filterPost.map((post) => {
            if (post.author === currentLogin.name) {
              return (
                <div
                  className="flex flex-col gap-2 shadow-lg p-2 rounded-md"
                  key={post.id}
                >
                  <img
                    src={post.img}
                    alt=""
                    className="w-full h-[200px] object-center object-cover rounded-md"
                  />
                  <div className="flex flex-col gap-2">
                    <h2 className="text-secondColor">{post.category}</h2>
                    <Link
                      to={"/post"}
                      onClick={() => {
                        handlePost(post);
                      }}
                    >
                      <h1 className="text-xl text-zinc-700 font-bold h-14 overflow-hidden">
                        {post.title}
                      </h1>
                    </Link>
                    <span className="text-sm">{post.date}</span>
                    <p className="text-md line-clamp-2 h-12 overflow-hidden">
                      {post.content}
                    </p>
                    <div className="flex gap-2 items-center text-sm font-medium">
                      <img
                        src={post.userImg}
                        alt=""
                        className="w-8 h-8 rounded-3xl object-cover object-center border border-secondColor"
                      ></img>
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </Container>
    </div>
  );
};

export default MyPosts;
