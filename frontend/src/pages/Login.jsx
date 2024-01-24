/* eslint-disable react/prop-types */
import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../firebase";

export const Login = ({ user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSignUpActive, setIsSignUpActive] = useState(true);
  const handleMethodChange = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    // Signed up 
      const user = userCredential.user;
      console.log(user);

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);

  });
  }
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  return (
    <section>
      <h2>Homepage</h2>
      <form>
        <fieldset>
          <legend>{isSignUpActive ? "Sign Up" : "Sign In"}</legend>
          <ul>
            <li>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" onChange={handleEmailChange} />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={handlePasswordChange}/>
            </li>
          </ul> 
          <button type="button" onClick={handleMethodChange}>
            {isSignUpActive ? "Sign Up" : "Sign In"}
          </button>
        </fieldset>
      </form>
    </section>
  );
};