import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

export const postContext = createContext();

const PostProvider = ({ children }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") || "All";
  const [posts, setPosts] = useState(() => {
    const localValue = localStorage.getItem("POSTS");
    if (localValue === null) {
      return [
        {
          id: 1,
          title: "Exploring the Latest in Mobile Tech",
          category: "Tech",
          content:
            "A deep dive into the newest advancements in mobile technology and their impact on our daily lives.",
          author: "Jane Doe",
          date: "2024-05-27",
          img: "/post-1.jpg",
          userImg: "/profile-1.jpg",
        },
        {
          id: 2,
          title: "Top Travel Destinations for Tech Enthusiasts",
          category: "Travel",
          content:
            "A guide to the best travel spots for those passionate about technology and innovation.",
          author: "John Smith",
          date: "2024-05-20",
          img: "/post-2.jpeg",
          userImg: "/profile-2.jpg",
        },
        {
          id: 3,
          title: "Designing for Mobile: Best Practices",
          category: "Design",
          content:
            "Tips and tricks for creating stunning mobile-friendly designs that captivate users.",
          author: "Emily Johnson",
          date: "2024-05-15",
          img: "/post-3.jpg",
          userImg: "/profile-3.jpg",
        },
        {
          id: 4,
          title: "Gadgets on the Go: Essential Travel Tech",
          category: "Mobile",
          content:
            "A roundup of must-have gadgets and tech accessories for travelers.",
          author: "Michael Brown",
          date: "2024-05-10",
          img: "/post-4.jpeg",
          userImg: "/profile-1.jpg",
        },
        {
          id: 5,
          title: "Innovative Design Trends in 2024",
          category: "Design",
          content:
            "An overview of the most exciting and innovative design trends to look out for this year.",
          author: "Sarah Green",
          date: "2024-05-05",
          img: "/post-5.jpeg",
          userImg: "/profile-2.jpg",
        },
        {
          id: 6,
          title: "The Future of Mobile Design: Trends to Watch",
          category: "Design",
          content:
            "An exploration of emerging trends in mobile design and how they are shaping the user experience.",
          author: "Laura Mitchell",
          date: "2024-06-01",
          img: "/post-6.jpg",
          userImg: "/profile-3.jpg",
        },
        {
          id: 7,
          title: "Tech Innovations Shaping the Travel Industry",
          category: "Tech",
          content:
            "A look at the latest technological advancements that are revolutionizing the travel industry.",
          author: "David Wilson",
          date: "2024-06-03",
          img: "/post-7.jpeg",
          userImg: "/profile-1.jpg",
        },
        {
          id: 8,
          title: "Designing for Accessibility in Mobile Apps",
          category: "Design",
          content:
            "Best practices for ensuring your mobile app designs are accessible to all users.",
          author: "Sophia Martinez",
          date: "2024-06-05",
          img: "/post-8.jpeg",
          userImg: "/profile-2.jpg",
        },
        {
          id: 9,
          title: "Top 10 Must-Have Mobile Apps for Travelers",
          category: "Mobile",
          content:
            "A curated list of essential mobile apps that make traveling easier and more enjoyable.",
          author: "Chris Thompson",
          date: "2024-06-07",
          img: "/post-9.jpg",
          userImg: "/profile-3.jpg",
        },
        {
          id: 10,
          title: "How 5G is Transforming Mobile Experiences",
          category: "Tech",
          content:
            "An in-depth look at how 5G technology is enhancing mobile experiences and what to expect in the future.",
          author: "Anna Lee",
          date: "2024-06-10",
          img: "/post-10.jpg",
          userImg: "/profile-1.jpg",
        },
      ];
    }
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("POSTS", JSON.stringify(posts));
  }, [posts]);

  const createPost = async (data) => {
    const res = await fetch("http://localhost:8080/api/articles/new", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });

    const article = await res.json();
    console.log(article);
    // setPosts((currentPosts) => {
    //   return [data, ...currentPosts];
    // });
  };

  const [filterPost, setFilterPost] = useState(posts);

  useEffect(() => {
    if (category) {
      if (category.toLowerCase() === "all") {
        setFilterPost(posts);
      } else {
        setFilterPost(() => {
          return posts.filter(
            (post) => post.category.toLowerCase() === category.toLowerCase()
          );
        });
      }
    }
  }, [category]);

  const [post, setPost] = useState();

  const handlePost = (post) => {
    setPost(post);
  };
  return (
    <postContext.Provider
      value={{ posts, filterPost, post, handlePost, createPost }}
    >
      {children}
    </postContext.Provider>
  );
};

export default PostProvider;
