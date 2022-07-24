import React from "react";
import "./sidebar.scss";
import {
  Dashboard,
  PersonOutlineOutlined,
  StoreRounded,
  CreditCardOutlined,
  LocalShippingOutlined,
  Assessment,
  Notifications,
  SettingsSystemDaydream,
  Psychology,
  Settings,
  AccountCircleRounded,
  LogoutRounded,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">LOGO</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineOutlined className="icon" />
            <span>Users</span>
          </li>
          <li>
            <StoreRounded className="icon" />
            <span>Products</span>
          </li>
          <li>
            <CreditCardOutlined className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlined className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>

          <li>
            <Assessment className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <Notifications className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICES</p>

          <li>
            <SettingsSystemDaydream className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <Psychology className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>

          <li>
            <AccountCircleRounded className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutRounded className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
