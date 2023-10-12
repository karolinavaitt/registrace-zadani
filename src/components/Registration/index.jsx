import React, { useState } from "react";
//import "./style.css";

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const emailSubmit = (e) => {
    const emailInput = e.target.value;

    if (emailInput.includes("@") && user.username === "") {
      setUser({
        ...user,
        email: emailInput,
        username: emailInput.slice(0, emailInput.indexOf("@")),
      });
    } else {
      setUser({ ...user, email: emailInput });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <form className="form" id="registration" onSubmit={handleSubmit}>
      <h1>Registration</h1>
      <label className="field">
        Email
        <input type="email" id="email" onChange={emailSubmit} />
      </label>
      <label className="field">
        Username
        <input
          type="text"
          id="userName"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </label>
      <label className="field">
        Password
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </label>
      <label className="field">
        Confirm password
        <input
          type="password"
          id="confirmation"
          value={user.passwordConfirm}
          onChange={(e) =>
            setUser({ ...user, passwordConfirm: e.target.value })
          }
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
