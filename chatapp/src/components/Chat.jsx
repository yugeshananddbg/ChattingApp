import React from "react";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Messages from "./Messages";
import Input from "./Input"
const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Yugesh Anand</span>
        <div className="chatIcons">
          <VideocamRoundedIcon className="icon" />
          <PersonAddIcon className="icon" />
          <MoreVertIcon className="icon" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};
export default Chat;
