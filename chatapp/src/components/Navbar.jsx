import React from "react";

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
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
