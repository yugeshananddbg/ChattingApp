import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [profile, setProfile] = useState("");
  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Eureka Chat</span>
          <span className="logo">Register</span>
          <form>
            <input type="text" placeholder="Please Enter your name" />
            <input type="text" placeholder="Please Enter your Email" />
            <input type="text" placeholder="Please Choose Password" />
            <input type="text" placeholder="Confirm Password" />
            <input style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
              <FontAwesomeIcon icon={faImage} />
            </label>
            <button>Register</button>
            <p>You do have account ? Login</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
