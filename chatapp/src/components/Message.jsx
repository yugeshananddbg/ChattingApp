import React, { useContext, useRef, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import moment from "moment";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <>
      <div
        ref={ref}
        className={
          message.senderId === currentUser.uid ? "message owner" : "message"
        }
      >
        <div className="messageInfo">
          <img
            src={
              message.senderId === currentUser.uid
                ? currentUser.photoURL
                : data.user.photoURL
            }
            alt=""
          />
          <span>
            {moment.unix(message.date.seconds / 1000).format("DD:MM:YY")}
          </span>
        </div>
        <div className="messageContent">
          <p>{message.text}</p>
          {message.img && <img src={message.img} alt="" />}
        </div>
      </div>
    </>
  );
};

export default Message;
