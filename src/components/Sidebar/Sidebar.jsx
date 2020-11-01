import React from "react";
import SidebarHeader from "./SidebarHeader/SidebarHeader";
import SidebarSearch from "./SidebarSearch/SidebarSearch";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <SidebarSearch />
    </div>
  );
};

export default Sidebar;
