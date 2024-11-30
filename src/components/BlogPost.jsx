import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { postContext } from "../context/PostProvider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BlogPost = () => {
  const { filterPost, handlePost } = useContext(postContext);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchAllArticles() {
      try {
        const res = await fetch("http://localhost:8080/api/articles/");
        const data = await res.json();
        return setArticles([...data])
      } catch (error) {
        throw new Error(`failed to fetch all articles ${error}`)
      }
    }

    fetchAllArticles();
  }, []);

  return (
    <div className="">
      <Container>
        <div className="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 my-5">
          {filterPost.map((post) => {
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
                    <h1 className="2xl:text-2xl text-xl text-zinc-700 font-bold h-14 overflow-hidden">
                      {post.title}
                    </h1>
                  </Link>
                  <span className="2xl:text-lg text-sm">{post.date}</span>
                  <p className="2xl:text-xl text-md line-clamp-2 h-12 overflow-hidden">
                    {post.content}
                  </p>
                  <div className="flex gap-2 items-center 2xl:text-lg text-sm font-medium">
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
          })}
        </div>
      </Container>
    </div>
  );
};

export default BlogPost;
