import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo"> Eureka Chat</span>
      <div className="user">
        <img
          src="https://avatars.githubusercontent.com/u/89369654?v=4"
          alt=""
        />

        <span>Yugesh Anand</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
