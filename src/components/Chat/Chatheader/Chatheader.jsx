import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./Chatheader.css";

const Chatheader = () => {
  return (
    <div className="chat__header">
      <Avatar />
      <div className="chat__headerInfo">
        <h3>Clear the Chat</h3>
        <p>last seen at...</p>
      </div>
      <div className="chat__headerRight">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <AttachFileIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chatheader;
