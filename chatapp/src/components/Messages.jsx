import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatContext } from "../context/ChatContext";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";

const Messages = () => {
  const { data } = useContext(ChatContext);
  const [messages, setMessages] = useState([]);
  console.log(data);
  useEffect(() => {
    if (data.chatId) {
      const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages);
      });
      return () => {
        unSub();
      };
    }
  }, [data.chatId]);



  return (
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
