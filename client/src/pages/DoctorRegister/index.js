import React, { useState } from "react";
import registerStyles from "./register.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../actions/authactions";
import { Link } from "react-router-dom";
import { registerDoctor } from "../../api";

export default function DoctorRegister() {
  const initialState = {
    email: "",
    name: "",
    registrationno: "",
    phno: "",
    DOR: "",
    type: "",
    workarea: "",
  };
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name === "doctor_img") {
      setForm({ ...form, [e.target.name]: e.target.files[0] });
    } else setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerDoctor({ ...form })
      .then((res) => {
        if (res.status === 201) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(form);
  return (
    <div id={registerStyles.register}>
      <form
        id={registerStyles.form}
        onSubmit={handleSubmit}
        enctype="multipart/form-data"
      >
        <div id={registerStyles.imgholder}>
          <img src="./images/ezgif.com-gif-maker.gif" alt="" />
          <div id={registerStyles.eyeband}></div>
        </div>
        <h2 id={registerStyles.heading}>Doctor Register</h2>
        <div id={registerStyles.cont}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Registration No."
            name="registrationno"
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <input
            type="text"
            placeholder="Phone No."
            name="phno"
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <input
            type="date"
            placeholder="Date Of Registration"
            name="DOR"
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="type"
            name="type"
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Hospital/Clinic"
            name="workarea"
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <input
            type="file"
            name="doctor_img"
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <p id={registerStyles.errortext}>{/* <%= error %> */}</p>
          {/* <a href="./forgotpassword" id="forgotpassword">Forgot Password?</a> */}

          <br />

          <button type="submit" id={registerStyles.submit}>
            Submit
          </button>
          <br />
          <br />
        </div>
      </form>
    </div>
  );
}
