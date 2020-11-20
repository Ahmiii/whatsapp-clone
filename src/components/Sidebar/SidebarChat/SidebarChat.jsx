import React from "react";
import WhatsappContact from "./WhatsappContacts/WhatsappContacts";
import "./SidebarChat.css";
const SidebarChat = (props) => {
  const { rooms } = props;
  return (
    <div className="sidebar__chat">
      {rooms.map((room) => {
        return <WhatsappContact key={room.id} data={room} />;
      })}
    </div>
  );
};

export default SidebarChat;
