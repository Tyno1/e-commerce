import React from "react";
import LoginImg from "../images/login.jpg";

export default function Register() {
  const handleRegister = () => {};

  return (
    <div className="register w-full h-[100vh] lg:px-60 px-4 pt-36 mb-20">
      <div className="container bg-gray-50 dark:bg-teal-900 rounded-lg shadow-xl h-[100%] w-full flex mx-auto">
        <div className="rounded-lg h-[100%] hidden md:block w-[40%]">
          <img
            className="object-cover object-center h-[100%] w-full rounded-lg"
            src={LoginImg}
            alt="Login Image"
          />
        </div>

        <div className="form md:p-4 h-full w-full md:w-[60%] h-[100%] flex flex-col items-center">
          <h2 className="py-10 text-5xl font-medium dark:text-orange-300 text-teal-900">
            Register
          </h2>
          <form
            className="flex flex-col items-center w-full px-2 h-full md:px-4 justify-between"
            action="login"
          >
            <div className="flex w-full flex-col md:flex-row mb-6 items-center gap-4 justify-between">
              <div className="flex flex-col w-[100%] md:w-[45%] gap-2">
                <label
                  htmlFor="first-name"
                  className="fname dark:text-teal-50 text-teal-900 text-sm"
                >
                  First Name
                </label>
                <input
                  className="py-2 px-4 rounded-lg shadow-xl dark:text-teal-900"
                  type="text"
                  placeholder="jane"
                />
              </div>

              <div className="flex flex-col w-[100%] md:w-[45%] gap-2">
                <label htmlFor="last-name" className="fname text-sm">
                  Last Name
                </label>
                <input
                  className="py-2 px-4 rounded-lg shadow-xl dark:text-teal-900"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="flex flex-col w-[100%] mb-6 gap-2">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                className="py-2 px-4 rounded-lg shadow-xl"
                type="text"
                placeholder="janedoe@mail.com"
              />
            </div>

            <div className="flex w-full flex-col md:flex-row mb-6 items-center gap-4 justify-between">
              <div className="flex flex-col w-[100%] md:w-[45%] gap-2">
                <label cl htmlFor="password" className="text-sm">
                  Password
                </label>
                <input
                  className="py-2 px-4 rounded-lg shadow-xl dark:text-teal-900"
                  type="password"
                  placeholder="************"
                />
              </div>

              <div className="flex flex-col w-[100%] md:w-[45%] gap-2">
                <label htmlFor="confirm-password" className="text-sm">
                  Confirm Password
                </label>
                <input
                  className="py-2 px-4 rounded-lg shadow-xl dark:text-teal-900"
                  type="password"
                  placeholder="************"
                />
              </div>
            </div>

            <button
              onSubmit={handleRegister}
              className="mb-6 shadow-xl border border-2 bg-teal-900 dark:bg-teal-950 border-orange-300 text-orange-300 rounded-xl px-6 py-3 focus:outline-none active:bg-teal-800 active:text-orange-300"
            >
              Register Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
