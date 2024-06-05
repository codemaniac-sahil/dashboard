import React from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AddToQueueOutlinedIcon from "@mui/icons-material/AddToQueueOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import logo from "../assets/logo.svg";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <>
      <div className="sidebar-section">
        <div className="sidebar-section-header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="sidebar-links">
            <DashboardOutlinedIcon />
            <AddToQueueOutlinedIcon />
            <LabelOutlinedIcon />

            <AssignmentOutlinedIcon />

            <LocalShippingOutlinedIcon />
            <WorkOutlineOutlinedIcon />
            <AccountBalanceWalletOutlinedIcon />
            <DynamicFeedOutlinedIcon />
            <SettingsOutlinedIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
