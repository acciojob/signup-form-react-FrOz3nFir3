import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [userName, setUserName] = React.useState(null);
  const [error, setError] = React.useState(null);

  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const genderRef = React.useRef();
  const phoneRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(null);
    let name = nameRef.current.value.trim();
    if (name.length == 0) {
      return setError("Name Error");
    } else {
      let letterRegex = /[a-z\s]+[0-9]+/i;
      if (!letterRegex.test(name)) {
        return setError("Name is not alphanumeric");
      }
    }

    let email = emailRef.current.value.trim();
    if (email.length == 0) {
      return setError("Email Error");
    } else {
      if (!email.includes("@")) {
        return setError("Email must contain @");
      }
    }

    let gender = genderRef.current.value;
    if (gender != "male" && gender != "female" && gender != "other") {
      return setError("Please identify as male, female or others");
    }

    let phone = phoneRef.current.value.trim();
    if (phone.length == 0) {
      return setError("Phone Error");
    } else {
      let letterRegex = /[a-z]/gi;
      if (letterRegex.test(phone)) {
        return setError("Phone Number must contain only numbers");
      }
    }

    let password = passwordRef.current.value.trim();
    if (password.length == 0) {
      return setError("Password Error");
    } else if (password.length < 6) {
      return setError("Password must contain atleast 6 letters");
    }
    // every input is checked and it is now valid
    let userName = email.split("@")[0];
    setError(null);
    setUserName(userName);
    e.target.reset();
  };

  return (
    <div id="main">
      {userName && <h2>Hello {userName}</h2>}
      {error && <h2>{error}</h2>}
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" data-testid="name" ref={nameRef} />

        <label htmlFor="email">Email address</label>
        <input type="text" id="email" data-testid="email" ref={emailRef} />

        <label htmlFor="gender">Gender</label>
        <select id="gender" data-testid="gender" ref={genderRef}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          data-testid="phoneNumber"
          ref={phoneRef}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          data-testid="password"
          ref={passwordRef}
        />

        <input type="submit" value="Submit" data-testid="submit" />
      </form>
    </div>
  );
};

export default App;
