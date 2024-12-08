import React, { useContext } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { userContext, useUser } from "../context/UserProvider";
import { useForm } from "react-hook-form";
import BackToHome from "./BackToHome";
import loginBg from "../assets/login.svg";

const Login = () => {
  const { userLogin, loginError, message } = useUser();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    userLogin(data);
  };
  return (
    <Container>
      <BackToHome />
      <div className="w-full h-dvh flex flex-col md:justify-center items-center">
        <div className="flex md:flex-row flex-col py-10 md:w-2/3 w-full mt-5">
          <div className="w-full bg-containerColor rounded-xl flex items-center p-2 md:shadow-2xl">
            <img src={loginBg} alt="background image" className="" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5 w-96 text-md mx-auto md:border border-zinc-300 rounded-xl px-5 py-10 md:shadow-xl"
          >
            <div className="flex flex-col items-center">
              <h1 className="text-xl text-orange-500 font-medium font-serif">
                Welcome back
              </h1>
              <span className="text-sm">
                Please enter your details to login
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex flex-col gap-1 text-sm">
                <label htmlFor="email">Email Address</label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  placeholder="enter your email"
                  className="focus:border-orange-500 duration-200 border border-zinc-400 rounded-md outline-none px-2 py-1"
                  required
                />
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <label htmlFor="password">Password</label>
                <input
                  {...register("password")}
                  type="Password"
                  id="password"
                  placeholder="enter your password"
                  className="focus:border-orange-500 duration-200 border border-zinc-400 rounded-md outline-none px-2 py-1"
                  required
                />
                <span
                  className={`hidden ${
                    loginError ? "text-red-600 text-[12px]" : ""
                  }`}
                >
                  Email or Password is incorrect.
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id="remember"
                    className="cursor-pointer"
                  />
                  <label htmlFor="remember" className="cursor-pointer">
                    Remember
                  </label>
                </div>
                <div>
                  <a
                    href="/forget-password"
                    className="underline cursor-pointer"
                  >
                    Forget password?
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 mt-4">
              <button
                type="submit"
                className="hover:bg-orange-500 active:scale-95 duration-200 bg-orange-400 w-80 py-1 text-white font-medium rounded-md"
              >
                Login
              </button>
              <div className="text-sm flex gap-1">
                <span>Don't have an account yet?</span>
                <Link
                  to={"/register"}
                  href=""
                  className="underline underline-offset-4"
                >
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
