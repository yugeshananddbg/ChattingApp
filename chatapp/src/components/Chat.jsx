import React, { useContext } from "react";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Chat = () => {
  const { data } = useContext(ChatContext);
  const toastHandler = () => {
    toast("Feature commming soon!");
  };

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>
          <img src={data.user.photoURL} alt="" />
          {data.user.displayName}
        </span>
        <div className="chatIcons">
          <VideocamRoundedIcon className="icon" onClick={toastHandler} />
          <PersonAddIcon className="icon" onClick={toastHandler} />
          <MoreVertIcon className="icon" onClick={toastHandler} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
export default Chat;
