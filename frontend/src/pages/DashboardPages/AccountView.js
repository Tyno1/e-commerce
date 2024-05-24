import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Trending from "../../components/Trending";

export default function AccountView() {
  const { user } = useContext(AuthContext);
  return (
    <div className="p-20 w-full flex flex-col items-start">
      <div className="welcome">
        <h1 className="text-5xl font-bold">
          <span>Hello, </span>
          {user.user.fullName}
        </h1>
      </div>
      <div className="account-information p-10 border mt-20 min-w-[30%] rounded flex flex-col gap-4 text-lg">
        <div>
          <h2>Username:</h2>
          <span className="font-bold text-2xl">{user?.user.username}</span>
        </div>
        <div>
          <h2>Email:</h2>
          <span className="font-bold text-2xl">{user?.user.email}</span>
        </div>
        <div>
          <h2 className="font-bold">Phone Number: </h2>
          <span className="font-bold text-2xl">{user?.user.phoneNumber}</span>
        </div>
      </div>
      <Trending />
    </div>
  );
}
