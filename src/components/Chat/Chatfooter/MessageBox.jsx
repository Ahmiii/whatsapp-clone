import React from "react";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import "./MessageBox.css";
const MessageBox = () => {
  return (
    <div className="message__box">
      <InsertEmoticonIcon />
      <form>
        <input type="text" placeholder="Type a message"></input>
        <button>Send message</button>
      </form>
      <MicIcon />
    </div>
  );
};

export default MessageBox;
