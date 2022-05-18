import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password)
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate("/home");
  }

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <div
        className="mx-auto border p-5 mt-5 shadow-sm p-3 mb-5 bg-white rounded"
        style={{ width: "35%" }}
      >
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="d-flex flex-column">
          <input
            className="mt-5 p-2"
            type="email"
            ref={emailRef}
            placeholder="Your Email"
          />
          <input
            className="mt-5 p-1"
            type="text"
            ref={passwordRef}
            placeholder="Type Password"
          />
          <button class="btn btn-outline-primary mt-5 mb-3">
            Login
          </button>
          <p>
            Don't have an account?
            <Link
              to="/register"
              className="text-primary m-1"
              onClick={goToRegister}
            >
              Create
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
