import React, { useState, useEffect, useContext } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const getChat = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };

    currentUser.uid && getChat();
  }, [currentUser.uid]);

  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://avatars.githubusercontent.com/u/89369654?v=4"
          alt=""
        />
        <div className="userChatInfo">
          <span>Yugesh Anannd</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://avatars.githubusercontent.com/u/89369654?v=4"
          alt=""
        />
        <div className="userChatInfo">
          <span>Yugesh Anannd</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://avatars.githubusercontent.com/u/89369654?v=4"
          alt=""
        />
        <div className="userChatInfo">
          <span>Yugesh Anannd</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img
          src="https://avatars.githubusercontent.com/u/89369654?v=4"
          alt=""
        />
        <div className="userChatInfo">
          <span>Yugesh Anannd</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
