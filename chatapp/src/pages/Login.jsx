import React, { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [profile, setProfile] = useState("");
  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Register</span>
          <form>
            <input type="text" placeholder="Please Enter your Email" />
            <input type="text" placeholder="Please Choose Password" />

            <button>Login</button>
            <p>You do not have account ? Register</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
