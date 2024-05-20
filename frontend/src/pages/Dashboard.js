import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { CgProfile } from "react-icons/cg";
import { RiBus2Fill } from "react-icons/ri";
import { FaInbox } from "react-icons/fa6";
import { RiCoupon3Fill } from "react-icons/ri";
import { MdOutlineSaveAlt, MdManageAccounts, MdLogout } from "react-icons/md";
import VoucherView from "./DashboardPages/VoucherView";
import SavedItemsViews from "./DashboardPages/SavedItemsViews";
import AccountManagementView from "./DashboardPages/AccountManagementView";
import InboxView from "./DashboardPages/InboxView";
import OrdersView from "./DashboardPages/OrdersView";

const DashboardMenuItem = ({ icon, text, onClick, selectedMenu }) => (
  <div
    onClick={onClick}
    className={`p-4 flex gap-4 items-center cursor-pointer rounded-lg 
      ${
        selectedMenu && selectedMenu === text
          ? "bg-teal-900 text-white rounded-none"
          : "bg-white text-teal-900 hover:bg-gray-100"
      }
    `}
  >
    <span>{icon}</span>
    {text}
  </div>
);

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [selectedMenu, setSelectedMenu] = useState();

  const handleSelectMenu = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="w-full h-[100vh] pt-32 px-8 mb-20 flex flex-">
      <div className="left-section h-full w-[350px] rounded-lg bg-white md:flex flex-col">
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
          onClick={() => handleSelectMenu("Orders")}
        />
        <DashboardMenuItem
          icon={<FaInbox size={28} />}
          selectedMenu={selectedMenu}
          text="Inbox"
          onClick={() => handleSelectMenu("Inbox")}
        />
        <DashboardMenuItem
          icon={<RiCoupon3Fill size={28} />}
          selectedMenu={selectedMenu}
          text="Voucher"
          onClick={() => handleSelectMenu("Voucher")}
        />
        <DashboardMenuItem
          icon={<MdOutlineSaveAlt size={28} />}
          selectedMenu={selectedMenu}
          text="Saved items"
          onClick={() => handleSelectMenu("Saved items")}
        />
        <DashboardMenuItem
          icon={<MdManageAccounts size={28} />}
          selectedMenu={selectedMenu}
          text="Account Management"
          onClick={() => handleSelectMenu("Account Management")}
        />
        <DashboardMenuItem icon={<MdLogout size={28} />} text="Logout" />
      </div>
      <div className="bg-gray-50 dark:bg-teal-800 rounded-xl ml-2 h-[100%] w-full md:w-[85%] ">
        {selectedMenu === "My Account" && <AccountManagementView />}
        {selectedMenu === "Orders" && <OrdersView />}
        {selectedMenu === "Inbox" && <InboxView />}
        {selectedMenu === "Voucher" && <VoucherView />}
        {selectedMenu === "Saved items" && <SavedItemsViews />}
        {selectedMenu === "Account Management" && <AccountManagementView />}
      </div>
    </div>
  );
}
