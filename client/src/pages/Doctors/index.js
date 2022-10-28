import React from "react";
import doctorStyle from "./doctor.module.css";
import { doctordata } from "./doctorList";

export default function Doctors() {
  return (
    <div id={doctorStyle["doctor"]}>
      <h1>Consult Online Doctors</h1>
      <br />
      <div className={doctorStyle["text"]}>
        <p>
          A Consultation with a trusted doctor for your every medical neeA
          Consultation with a trusted doctor for your every medical need Consult
          trusted & experienced General Physicians. We hand pick doctors for you
          to consult online for your specific requirments. Our Doctors listen to
          the patients patiently and prescribe only what is required for you and
          your precious life Online consultations for all your health-related
          concerns from the safety of your home with the doctors across all
          specialities. We came up with online consultations for people who
          couldn't reach the hospital Renowned and trusted specialists and
          super-specialists specific to your medical needs, just a click away.
        </p>
      </div>
      <div className={doctorStyle["abc"]}>
        {doctordata.map((doctor) => {
          return (
            <div className={doctorStyle["card"]}>
              <div className={doctorStyle["card-image"]}>
                <img src={doctor.img} alt="Profile image" />
              </div>
              <p className={doctorStyle["name"]}>{doctor.name}</p>
              <p>{doctor.type}</p>
              <p>
                {" "}
                Ph.No: {doctor.phno}
                <br />
                Email: {doctor.email}
                <br />
                {doctor.hospital}
                <br />
              </p>
              <div className={doctorStyle["socials"]}>
                <button className={doctorStyle["facebook"]}>
                  <i className="fab fa-facebook"></i>
                </button>
                <button className={doctorStyle["instagram"]}>
                  <i className="fab fa-instagram"></i>
                </button>
                <button className={doctorStyle["twitter"]}>
                  <i className="fab fa-twitter"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
