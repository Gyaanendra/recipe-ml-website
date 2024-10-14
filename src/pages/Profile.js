import React, { useState } from "react";
import { signupUser, loginUser } from "../api";

const Profile = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [user, setUser] = useState(null);

  const handleSignup = () => {
    signupUser(firstname, lastname, email, password).then((response) => {
      console.log(response.data);
    });
  };

  const handleLogin = () => {
    loginUser(email, password).then((response) => {
      setUser(response.data);
    });
  };

  return (
    <div>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      {!isLogin && (
        <>
          <input
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </>
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={isLogin ? handleLogin : handleSignup}>
        {isLogin ? "Login" : "Sign Up"}
      </button>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Go to Signup" : "Go to Login"}
      </button>

      {user && (
        <div>
          <h2>
            Welcome, {user.firstname} {user.lastname}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Profile;
