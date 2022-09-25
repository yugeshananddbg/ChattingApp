import React from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Add message....................." />
      <div className="send">
        <input type="file"  id="img" style={{display:"none"}}/>
        <label htmlFor="img">
            <AddPhotoAlternateIcon className="icon"/>
        </label>
        <input type="file"  id="img1" style={{display:"none"}}/>
        <label htmlFor="img">
            <AttachFileIcon className="icon"/>
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
