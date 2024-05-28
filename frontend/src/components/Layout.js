import { useContext, useRef } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Layout = ({ sideLinks, header, content }) => {
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    window.location.reload();
  };

  return user ? (
    <div className="flex h-full w-full">
      {/* Sidebar */}
      <div className="w-[300px] min-h-[100vh] z-20 bg-black">
        {sideLinks}
      </div>


      {/* Main Content */}
      <main className="flex-1 px-2 pt-20">{content}</main>
    </div>
  ) : (
    <>{content}</>
  );
};

export default Layout;
