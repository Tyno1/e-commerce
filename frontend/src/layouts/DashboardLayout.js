import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RiBus2Fill } from "react-icons/ri";
import { FaInbox } from "react-icons/fa6";
import { RiCoupon3Fill } from "react-icons/ri";
import { MdOutlineSaveAlt, MdManageAccounts, MdLogout } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import { Outlet, useNavigate } from "react-router-dom";

const DashboardMenuItem = ({ icon, text, onClick, selectedMenu }) => (
  <div
    onClick={onClick}
    className={`p-4 flex gap-4 items-center cursor-pointer rounded-lg 
      ${
        selectedMenu && selectedMenu === text
          ? "dark:bg-orange-300 bg-teal-900 dark:text-teal-950 text-teal-50 rounded-none"
          : "dark:bg-teal-950 dark:text-white dark:hover:bg-teal-800 bg-white text-teal-900 hover:bg-slate-100 rounded-none"
      }
    `}
  >
    <span>{icon}</span>
    {text}
  </div>
);

export default function DashboardLayout() {
  const [selectedMenu, setSelectedMenu] = useState();
  const navigate = useNavigate();

  const handleSelectMenu = (menu, route) => {
    setSelectedMenu(menu);
    navigate(route);
  };

  return (
    <div className="w-full h-[90vh] pt-32 px-8 mb-20 flex flex-col md:flex-row">
      <div className="left-section h-full w-full md:w-[350px] rounded-lg dark:bg-teal-950 border dark:border-teal-900 md:flex flex-col shadow-2xl">
        <DashboardMenuItem
          icon={<CgProfile size={28} />}
          selectedMenu={selectedMenu}
          text="My Account"
          onClick={() => handleSelectMenu("My Account")}
        />
        <DashboardMenuItem
          icon={<RiBus2Fill size={28} />}
          selectedMenu={selectedMenu}
          text="Orders"
          onClick={() => handleSelectMenu("Orders", "orders")}
        />
        <DashboardMenuItem
          icon={<FaInbox size={28} />}
          selectedMenu={selectedMenu}
          text="Inbox"
          onClick={() => handleSelectMenu("Inbox", "inbox")}
        />
        <DashboardMenuItem
          icon={<RiCoupon3Fill size={28} />}
          selectedMenu={selectedMenu}
          text="Voucher"
          onClick={() => handleSelectMenu("Voucher", "voucher")}
        />
        <DashboardMenuItem
          icon={<MdOutlineSaveAlt size={28} />}
          selectedMenu={selectedMenu}
          text="Saved items"
          onClick={() => handleSelectMenu("Saved items", "saved-items")}
        />
        <DashboardMenuItem
          icon={<RiCustomerServiceFill size={28} />}
          selectedMenu={selectedMenu}
          text="Get Help"
          onClick={() => handleSelectMenu("Get Help", "get-help")}
        />

        <DashboardMenuItem
          icon={<MdManageAccounts size={28} />}
          selectedMenu={selectedMenu}
          text="Account Management"
          onClick={() =>
            handleSelectMenu("Account Management", "account-management")
          }
        />
        <DashboardMenuItem icon={<MdLogout size={28} />} text="Logout" />
      </div>
      <div className="bg-gray-50 dark:bg-teal-950 border border-teal-900 shadow-2xl rounded-xl ml-2 h-[100%] w-full md:w-[85%] overflow-y-auto">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
