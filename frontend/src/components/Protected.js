import { useContext, useEffect } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";
import { MdRemoveModerator, MdSpaceDashboard } from "react-icons/md";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Layout from "./Layout";

const Protected = () => {
  const { user, logout, decodeUserToken } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const decoded = decodeUserToken();

  //   if (decoded?.userType?.name !== "ADMIN") {
  //     navigate("/");
  //   }
  // }, [user]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  const Style = (path) => ({
    color: location.pathname === path ? "#777" : "initial",
  });

  return (
    <Layout
      sideLinks={
        <div className="w-full h-full p-4 pt-32">
          <ul className="links flex flex-col">
            <li className="p-4 border-solid border-b-2 border-gray-800 ">
              <Link className="flex gap-4 items-center" to="/admin/dashboard">
                <MdSpaceDashboard size={30} className="text-amber-500" />
                <p>Dashboard</p>
              </Link>
            </li>
            
            <li className="p-4 p-4 pb-4 border-solid border-b-2 border-gray-800 ">
              <Link className="flex gap-4 items-center" to="/admin/reviews-moderator">
                <MdRemoveModerator size={30} className="text-amber-500" />
                <p>Reviews Moderator</p>
              </Link>
            </li>

            <li className="p-4 p-4 pb-4 border-solid border-b-2 border-gray-800 ">
              <Link className="flex gap-4 items-center" to="/admin/drugs-manager">
                <MdRemoveModerator size={30} className="text-amber-500" />
                <p>Drugs Manager</p>
              </Link>
            </li>

            <li className="p-4 p-4 pb-4 border-solid border-b-2 border-gray-800">
              <Link className="flex gap-4 items-center" to="/admin/drugs-upload">
                <GiGamepad size={30} className="text-amber-500" />
                <p>Drug Upload</p>
              </Link>
            </li>
            <li className="p-4 p-4 pb-4 border-solid ">
              <button
                className="flex gap-4 items-center"
                to="#"
                onClick={logout}
              >
                <BiLogOut size={30} className="text-amber-500" />
                <p>Logout</p>
              </button>
            </li>
          </ul>
        </div>
      }
      content={<Outlet />}
    />
  );
};

export default Protected;
