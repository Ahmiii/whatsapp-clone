import React from "react";
import Chatheader from "./Chatheader/Chatheader";
import Chatbody from "./Chatbody/Chatbody";
import Chatfooter from "./Chatfooter/MessageBox";
import "./Chat.css";
const Chat = () => {
  return (
    <div className="chat">
      <Chatheader />
      <Chatbody />
      <Chatfooter />
    </div>
  );
};

export default Chat;
