import React, { useContext, useState } from "react";
import LoginImg from "../images/login.jpg";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [payload, setPayload] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (payload) {
      login(payload)
        .then((res) => {
          console.log(res);
          toast("Login Successful", { hideProgressBar: true });
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.response.data, { hideProgressBar: true });
        });
    }
  };
  return (
    <div className="login w-full h-[100vh] xl:px-60 px-4 pt-36 mb-20">
      <div className="container bg-gray-50 dark:bg-teal-950 rounded-lg shadow-xl min-h-[400px] w-full flex mx-auto">
        <div className="rounded-lg min-h-[100%] hidden md:block w-[40%]">
          <img
            className="object-cover object-center h-[100%] w-full rounded-lg"
            src={LoginImg}
            alt="Login Image"
          />
        </div>

        <div className="form p-6 md:p-20 h-full flex-1 w-full h-[100%] flex flex-col gap-10 items-center my-auto">
          <h2 className="text-5xl font-medium dark:text-orange-300 text-teal-900">
            Login
          </h2>
          <form
            className="flex flex-col items-center w-full px-2 h-full md:px-4"
            onSubmit={handleLogin}
          >
            <div className="flex flex-col w-[100%] mb-6 gap-2">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                className="py-2 px-4 rounded-lg shadow-xl text-teal-900 focus:outline-none focus:ring focus:ring-teal-700"
                name="email"
                value={payload.email}
                onChange={handleChange}
                type="email"
                placeholder="janedoe@mail.com"
              />
            </div>

            <div className="flex flex-col w-[100%] mb-6 gap-2 focus:outline-none focus:ring focus:ring-teal-700">
              <label className="text-sm" htmlFor="email">
                Password
              </label>
              <input
                className="py-2 px-4 rounded-lg shadow-xl text-teal-900"
                type="password"
                name="password"
                value={payload.password}
                onChange={handleChange}
                placeholder="Enter Password"
              />
            </div>

            <button className="my-6 shadow-xl border border-2 bg-teal-900 dark:bg-teal-950 dark:border-orange-300 text-orange-300 rounded-xl px-6 py-3 text-white dark:text-orange-300 rounded-xl px-6 py-3 focus:outline-none active:bg-teal-950 dark:active:text-orange-300">
              Login
            </button>

            <div className="mb-6 flex flex-col items-center text-teal-900 dark:text-teal-50 gap-2">
              <p>Forgot your password ?</p>
              {/* remember to add reset password route */}

              <button className="text-gray-400 dark:text-orange-300">
                Reset it here
              </button>
            </div>

            <div className="flex flex-col items-center text-teal-900 dark:text-teal-50 gap-2">
              <p>Dont have an account?</p>
              <button
                onClick={() => navigate("/register")}
                className="text-gray-400 dark:text-orange-300"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
