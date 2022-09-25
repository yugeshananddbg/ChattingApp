import React from 'react'

const Search = () => {
  return (
    <div className='search'>
        <div className="searchForm">
            <input type="text" placeholder='Search User' />
        </div>
        <div className="userChat">
            <img src="https://avatars.githubusercontent.com/u/89369654?v=4" alt="" />
            <div className="userChatInfo">
                <span>Yugesh Anannd</span>
            </div>
        </div>
    </div>
  )
}

export default Search