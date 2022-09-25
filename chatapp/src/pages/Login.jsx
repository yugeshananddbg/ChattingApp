import React, { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Login</span>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Please Enter your Email" />
            <input type="text" placeholder="Please Choose Password" />

            <button>Login</button>
            {err && <span>Something Went Wrong</span>}
            <p>You do not have account ?<Link to="/register">Register</Link> </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
