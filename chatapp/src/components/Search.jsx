import React, { useState } from "react";

const Search = () => {
  const [userName, setUserName] = useState("");
  const [err, setErr] = useState(false);
  const [user, setUser] = useState(null);

  const handleSearch = () => {};
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Search User"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKey}
        />
      </div>
      <div className="userChat">
        <img
          src="https://avatars.githubusercontent.com/u/89369654?v=4"
          alt=""
        />
        <div className="userChatInfo">
          <span>Yugesh Anannd</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
