import React from "react";
import { Avatar } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./SidebarHeader.css";

const SidebarHeader = () => {
  return (
    <div className="sidebar__header">
      <Avatar />
      <div className="sidebar__headerRight">
        <DonutLargeIcon />
        <ChatIcon />
        <MoreVertIcon />
      </div>
    </div>
  );
};

export default SidebarHeader;
