import React from "react";
import "./Chatbody.css";
const Chatbody = () => {
  return (
    <div className="chat__body">
      <p className={`chat__message ${true && "chat__reciver"}`}>
        <span style={{ right: "-8px" }}></span>
        <span className="message__writer">Ahmed Faraz</span>
        hey
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddguys
        <span className="message__timestamp">3:20 PM</span>
      </p>
    </div>
  );
};

export default Chatbody;
