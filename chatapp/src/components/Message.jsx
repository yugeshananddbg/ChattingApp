import React from "react";

const Message = () => {
  return (
    <>
     <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://avatars.githubusercontent.com/u/89369654?v=4"
          alt=""
        />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img
          src="https://avatars.githubusercontent.com/u/89369654?v=4"
          alt=""
        />
      </div>
    </div>
    <div className="message">
      <div className="messageInfo">
        <img
          src="https://avatars.githubusercontent.com/u/89369654?v=4"
          alt=""
        />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img
          src="https://avatars.githubusercontent.com/u/89369654?v=4"
          alt=""
        />
      </div>
    </div>
    </>
   
  );
};

export default Message;
