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
      <section className="bg-containerColor/95">
        <Container>
          <div className="flex flex-col md:gap-2 gap-5 md:h-[250px] h-80 justify-center items-center font-sans text-white">
            <h1 className="font-bold md:text-2xl md:w-1/2 text-xl text-center tracking-widest">
              "Empowering Developers, One Line of Code at a Time"
            </h1>
            <span className="2xl:text-lg md:w-2/3 text-center">
              "Explore tutorials, insights, and resources to master web
              development, programming languages, and the latest tech trends.
              Build your future, today."
            </span>
          </div>
          <div className="py-2">
            <Navtab />
          </div>
        </Container>
      </section>
      <BlogPost />
    </div>
  );
};

export default Home;
