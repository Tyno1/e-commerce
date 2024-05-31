import React, { useContext, useState } from "react";
import LoginImg from "../images/login.jpg";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);
  const [confirmPassword, setConfirmPassword] = useState();
  const [payload, setPayload] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: 0,
    password: "",
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
    console.log("changing");
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    let _payload = { ...payload };
    if (payload.password === confirmPassword) {
      // Passwords match, proceed with form submission
      // console.log("Passwords match!");

      if (_payload) {
        console.log(_payload);
        register(_payload)
          .then((res) => {
            toast.success(res.data, { hideProgressBar: true });
            navigate("/login");
          })
          .catch((error) => {
            toast.error(error.message, { hideProgressBar: true });
            console.error(error);
          });
      }
    } else {
      toast.error("Passwords do not match", { hideProgressBar: true });
      console.error("Passwords do not match");
    }
  };

  return (
    <div className="register w-full min-h-[100vh] lg:px-60 px-4 pt-36 mb-20">
      <div className="container bg-gray-50 dark:bg-teal-900 rounded-lg shadow-xl min-h-[400px] w-full flex mx-auto">
        <div className="rounded-lg min-h-[100%] hidden md:block min-w-[40%]">
          <img
            className="object-cover object-center h-[100%] w-full rounded-lg"
            src={LoginImg}
            alt="Register Image"
          />
        </div>

        <div className="form p-6 md:p-20 h-full w-[60%] flex-1 h-[100%] flex flex-col gap-10 items-center">
          <h2 className="w-full text-center text-5xl font-medium dark:text-orange-300 text-teal-900">
            Register
          </h2>
          <form
            className="flex flex-col gap-8 items-center w-full px-2 h-full md:px-4"
            onSubmit={handleRegister}
          >
            <div className="flex w-full flex-col md:flex-row items-center gap-8 justify-between">
              <div className="flex flex-col w-[100%] md:w-[45%] gap-2">
                <label
                  htmlFor="first-name"
                  className="fname dark:text-teal-50 text-teal-900 text-sm"
                >
                  First Name
                </label>
                <input
                  className="py-2 px-4 rounded-lg shadow-xl dark:text-teal-900 focus:outline-none focus:ring focus:ring-teal-700 "
                  type="text"
                  placeholder="jane"
                  name="firstName"
                  value={payload.firstName}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col w-[100%] md:w-[45%] gap-2">
                <label htmlFor="last-name" className="fname text-sm">
                  Last Name
                </label>
                <input
                  className="py-2 px-4 rounded-lg shadow-xl dark:text-teal-900 focus:outline-none focus:ring focus:ring-teal-700 "
                  type="text"
                  placeholder="Doe"
                  name="lastName"
                  value={payload.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col w-[100%] gap-2">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                className="py-2 px-4 rounded-lg shadow-xl focus:outline-none focus:ring focus:ring-teal-700 "
                type="text"
                placeholder="janedoe@mail.com"
                value={payload.email}
                name="email"
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col w-[100%] gap-2">
              <label
                htmlFor="username"
                className="fname dark:text-teal-50 text-teal-900 text-sm"
              >
                Username
              </label>
              <input
                className="py-2 px-4 rounded-lg shadow-xl dark:text-teal-900 focus:outline-none focus:ring focus:ring-teal-700"
                type="text"
                placeholder="jane232"
                name="username"
                value={payload.username}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col w-[100%] gap-2">
              <label className="text-sm" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                className="py-2 px-4 rounded-lg shadow-xl dark:text-teal-900 focus:outline-none focus:ring focus:ring-teal-700 "
                type="number"
                placeholder="07******98"
                value={payload.phoneNumber}
                name="phoneNumber"
                onChange={handleChange}
              />
            </div>

            <div className="flex w-full flex-col md:flex-row items-center gap-8 justify-between">
              <div className="flex flex-col w-[100%] md:w-[45%] gap-2">
                <label cl htmlFor="password" className="text-sm">
                  Password
                </label>
                <input
                  className="py-2 px-4 rounded-lg shadow-xl dark:text-teal-900 focus:outline-none focus:ring focus:ring-teal-700 "
                  type="password"
                  placeholder="************"
                  value={payload.password}
                  name="password"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col w-[100%] md:w-[45%] gap-2">
                <label htmlFor="confirm-password" className="text-sm">
                  Confirm Password
                </label>
                <input
                  className="py-2 px-4 rounded-lg shadow-xl dark:text-teal-900 focus:outline-none focus:ring focus:ring-teal-700 "
                  type="password"
                  placeholder="************"
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                />
              </div>
            </div>

            <button className="shadow-xl border border-2 bg-teal-900 dark:bg-teal-950 border-orange-300 text-orange-300 rounded-xl px-6 py-3 focus:outline-none active:bg-teal-900 active:text-orange-300">
              Register Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
