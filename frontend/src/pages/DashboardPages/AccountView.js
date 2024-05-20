import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function AccountView() {
  const { user } = useContext(AuthContext);
  return (
    <div className="p-20">
      <div className="welcome">
        <p>Welcome</p>
        <h1 className="text-7xl font-bold">{user.user.fullName}</h1>
      </div>
    </div>
  );
}
