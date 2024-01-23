/* eslint-disable react/prop-types */
import { useState } from "react";

export const Login = ({ user }) => {
  const [isSignUpActive, setIsSignUpActive] = useState(true);
  const handleMethodChange = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  return (
    <section>
      <h2>Homepage</h2>
      <form>
        <fieldset>
          <legend>{isSignUpActive ? "Sign Up" : "Sign In"}</legend>
          <ul>
            <li>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" />
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
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
