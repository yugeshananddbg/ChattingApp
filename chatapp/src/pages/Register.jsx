import React, { useState } from "react";
import InsertPhotoRoundedIcon from "@mui/icons-material/InsertPhotoRounded";
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;
    const file = e.target[4].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
       
        (error) => {
          
        },
        () => {
          
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
        }
      );
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Register</span>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Please Enter your name" />
            <input type="text" placeholder="Please Enter your Email" />
            <input type="text" placeholder="Please Choose Password" />
            <input type="text" placeholder="Confirm Password" />
            <input style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
              <InsertPhotoRoundedIcon />
              <span>Upload Profile Image</span>
            </label>
            <button>Register</button>
            {err && <span>Something Went Wrong</span>}
            <p>You do have account ? Login</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
