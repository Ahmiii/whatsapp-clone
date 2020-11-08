import React from "react";
import Chatheader from "./Chatheader/Chatheader";
import Chatbody from "./Chatbody/Chatbody";
import "./Chat.css";
const Chat = () => {
  return (
    <div className="chat">
      <Chatheader />
      <Chatbody />
    </div>
  );
};

export default Chat;
