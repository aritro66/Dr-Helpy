import React, { useState } from "react";
import loginStyles from "./login.module.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div id={loginStyles.login}>
      <form id={loginStyles.form} autocomplete="off">
        <div id={loginStyles.imgholder}>
          <img src="./images/ezgif.com-gif-maker.gif" alt="" />
          <div id={loginStyles.eyeband}></div>
        </div>
        <h2 id={loginStyles.heading}>Log In</h2>
        <div id={loginStyles.cont}>
          <input
            type="email"
            id={loginStyles.email}
            placeholder="Email"
            name="email"
            required
          />
          <br />
          <br />
          <div className={loginStyles["password-layout"]}>
            <input
              type={!showPassword ? "password" : "text"}
              id={loginStyles.pass}
              placeholder="Password"
              name="password"
              required
            />
            <i
              className={`fa-solid ${
                !showPassword ? "fa-eye" : "fa-eye-slash"
              }`}
              id={loginStyles.passicon}
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            ></i>
          </div>
          <p id={loginStyles.errortext}>{/* <%= error %> */}</p>
          {/* <a href="./forgotpassword" id="forgotpassword">Forgot Password?</a> */}

          <br />

          <button type="submit" id={loginStyles.submit}>
            Submit
          </button>
          <br />
          <br />
          <span>Don't have any accoount? </span>
          <a href="./signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
}
