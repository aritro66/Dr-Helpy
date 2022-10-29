import React from "react";

export default function Doctor({ doctor, doctorStyle }) {
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
}
