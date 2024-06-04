import React, { useContext, useEffect } from "react";
import Container from "./Container";
import Navtab from "./Navtab";
import BlogPost from "./BlogPost";
import { userContext } from "../context/UserProvider";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="bg-containerColor">
        <Container>
          <div className="flex flex-col gap-2 h-[440px] justify-center items-center font-sans text-white">
            <h1 className="font-bold text-5xl tracking-widest">
              The Simple Blog
            </h1>
            <span>Your source of graet content</span>
          </div>
        </Container>
      </section>
      <Navtab />
      <BlogPost />
    </div>
  );
};

export default Home;
