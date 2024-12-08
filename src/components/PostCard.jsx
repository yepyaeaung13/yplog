import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ handlePost, post }) => {
  return (
    <Link
      to={"/post"}
      onClick={() => {
        handlePost(post);
      }}
      className="flex flex-col gap-2 shadow-lg p-2 rounded-lg bg-white border border-white hover:border-secondColor duration-200"
    >
      <div className="flex gap-2 items-center 2xl:text-lg text-sm font-medium py-3 border-b">
        <img
          src={post.userImg}
          alt=""
          className="w-8 h-8 rounded-3xl object-cover object-center border border-secondColor"
        ></img>
        <div>
          <span>{post.author}</span>
          <h2 className="text-orange-500 text-xs">{post.category}</h2>
        </div>
      </div>
      <div className="px-2 space-y-2">
        <div className="flex flex-col gap-2">
          <h1 className="2xl:text-2xl text-md text-zinc-700 font-bold h-12 overflow-hidden">
            {post.title}
          </h1>
          <span className="2xl:text-lg text-xs">{post.date}</span>
          <p className="2xl:text-xl text-sm line-clamp-2 h-12 overflow-hidden">
            {post.content}
          </p>
        </div>
        <img
          src={post.img}
          alt=""
          className="w-full h-[200px] object-center object-cover rounded-md"
        />
      </div>
    </Link>
  );
};

export default PostCard;
