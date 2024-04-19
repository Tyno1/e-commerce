import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  return (
    <div className="login w-full h-[100vh] lg:px-60 px-4 pt-36 mb-20">
      Welcome {user.user.username}
    </div>
  );
}
