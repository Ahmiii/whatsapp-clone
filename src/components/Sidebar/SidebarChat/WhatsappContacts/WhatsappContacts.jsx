import React from "react";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./WhatsappContacts.css";
const WhatsappContacts = (props) => {
  const { data, roomId } = props;
  const history = useHistory();

  const HandleSelectedRoom = () => {
    if (roomId) {
      history.push(`/room/${roomId}`);
    }
  };

  return (
    <div className="sidebar__contact" onClick={HandleSelectedRoom}>
      <Avatar />
      <div className="sidebar__contactInfo">
        <h2>{data.data.name}</h2>
        <p>last message...</p>
      </div>
    </div>
  );
};

export default WhatsappContacts;
