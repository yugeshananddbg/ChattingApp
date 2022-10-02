import React, { useContext } from "react";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>
          <img src={data.user.photoURL} alt=""  />
          {data.user.displayName}
        </span>
        <div className="chatIcons">
          <VideocamRoundedIcon className="icon" />
          <PersonAddIcon className="icon" />
          <MoreVertIcon className="icon" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
export default Chat;
