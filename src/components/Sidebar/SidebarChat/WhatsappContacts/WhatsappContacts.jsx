import React from "react";
import { Avatar } from "@material-ui/core";
import "./WhatsappContacts.css";
const WhatsappContacts = () => {
  return (
    <div className="sidebar__contact">
      <Avatar />
      <div className="sidebar__contactInfo">
        <h2>Room Name</h2>
        <p>last message...</p>
      </div>
    </div>
  );
};

export default WhatsappContacts;
