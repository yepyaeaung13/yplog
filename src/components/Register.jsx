import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useUser } from "../context/UserProvider";
import BackToHome from "./BackToHome";
import registerBg from "../assets/register.svg";

const Register = () => {
  const [isSame, setIsSame] = useState(true);
  const { createNewAccount, message } = useUser();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      setIsSame(true);
      createNewAccount(data);
      // location.pathname = "/register/success";
    } else {
      setIsSame(false);
    }
  };
  return (
    <Container>
      <BackToHome />
      <div className="flex justify-center max-sm:pt-5">
        <div className="flex md:flex-row flex-col py-8 md:w-2/3 w-full">
          <div className="md:w-2/3 w-full max-sm:h-60 md:p-5 p-3 rounded-xl flex md:justify-center justify-between items-center bg-containerColor md:shadow-2xl">
            <div className="md:hidden text-white space-y-3">
              <h1 className="text-lg font-bold">Create a new account</h1>
              <p className="text-sm">Enter your details</p>
            </div>
            <img src={registerBg} alt="background image" className="h-2/3" />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 md:w-2/3 w-full text-md mx-auto md:border border-zinc-300 rounded-xl p-5 md:shadow-xl"
          >
            <div className="hidden md:flex flex-col items-center border-b pb-5">
              <h1 className="text-lg text-orange-500 font-semibold font-serif">
                Create a new account
              </h1>
              <span className="text-sm">Enter your details to register</span>
            </div>
            {message?.ok ? (
              <p className="text-green-500 text-center text-sm">
                {message?.message}
              </p>
            ) : (
              <p className="text-red-500 text-center text-sm">
                {message?.message}
              </p>
            )}
            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="name">Full Name</label>
              <input
                {...register("name")}
                type="text"
                id="name"
                placeholder="enter your name"
                className="focus:border-orange-500 duration-200 border border-zinc-400 rounded-md outline-none px-2 py-1"
                required
              />
            </div>
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
                minLength={8}
                className="focus:border-orange-500 duration-200 border border-zinc-400 rounded-md outline-none px-2 py-1"
                required
              />
              <span className="text-[10px]">
                Password must be at least 8 characters
              </span>
            </div>
            <div className="flex flex-col gap-1 text-sm">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                {...register("confirmPassword")}
                type="Password"
                id="confirmPassword"
                placeholder="enter your confirm password"
                minLength={8}
                className="focus:border-orange-500 duration-200 border border-zinc-400 rounded-md outline-none px-2 py-1"
                required
              />
              <span
                className={`${!isSame ? "text-[10px] text-red-600" : "hidden"}`}
              >
                Confirm Password must be same with password
              </span>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col gap-1 text-sm border-b-2 pb-2 w-1/2">
                <label htmlFor="gender" title="choose gender">
                  Gender
                </label>
                <select
                  {...register("gender")}
                  className="flex gap-3 text-sm bg-white outline-none"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="flex flex-col gap-1 text-sm border-b-2 pb-2 w-1/2">
                <label htmlFor="birthDate" title="choose birth date">
                  Birth Date
                </label>
                <input
                  {...register("birthDate")}
                  type="date"
                  id="birthDate"
                  className="w-36 outline-none text-sm"
                  required
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" className="cursor-pointer" />
              <label htmlFor="terms" className="cursor-pointer">
                <span className="text-[10px]">
                  By clicking Register, you agree to accept.
                </span>
                <a href="" className="underline text-[10px] underline-offset-4">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <button
                type="submit"
                className="bg-orange-400 hover:bg-orange-500 w-80 py-1 text-white rounded-md active:scale-95 duration-200"
              >
                Register
              </button>
              <p className="text-sm">
                Have an already account ?
                <Link
                  to={"/login"}
                  className="px-1 underline underline-offset-4"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Register;
