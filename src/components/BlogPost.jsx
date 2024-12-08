import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { postContext } from "../context/PostProvider";
import PostCard from "./PostCard";

const BlogPost = () => {
  const { filterPost, handlePost } = useContext(postContext);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchAllArticles() {
      try {
        const res = await fetch("http://localhost:8080/api/articles/");
        const data = await res.json();
        return setArticles([...data]);
      } catch (error) {
        throw new Error(`failed to fetch all articles ${error}`);
      }
    }

    fetchAllArticles();
  }, []);

  if (filterPost?.length === 0)
    return (
      <div className="flex justify-center">
        <p className="mt-20">No Result Found</p>
      </div>
    );

  return (
    <div className="bg-gray-200">
      <Container>
        <div className="grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 py-5">
          {filterPost.map((post) => {
            return (
              <PostCard key={post.id} post={post} handlePost={handlePost} />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default BlogPost;
