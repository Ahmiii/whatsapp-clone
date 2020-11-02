import React from "react";
import SidebarHeader from "./SidebarHeader/SidebarHeader";
import SidebarSearch from "./SidebarSearch/SidebarSearch";
import SidebarChat from "./SidebarChat/SidebarChat";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarSearch />
      <SidebarChat />
    </div>
  );
};

export default Sidebar;
