import React from "react";
import { Link } from "react-router-dom";

export default function Footer({ styles }) {
  return (
    <section className={styles.footer}>
      <div className={styles["box-container"]}>
        <div className={styles["box"]}>
          <h3>our locations</h3>
          <Link to="#">
            {" "}
            <i className="fas fa-map-marker-alt"></i> india{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-map-marker-alt"></i> USA{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-map-marker-alt"></i> russia{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-map-marker-alt"></i> france{" "}
          </Link>
        </div>

        <div className={styles.box}>
          <h3>quick links</h3>
          <Link to="#">
            {" "}
            <i className="fas fa-arrow-right"></i> home{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-arrow-right"></i> featured{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-arrow-right"></i> reviews{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-arrow-right"></i> consultation{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-arrow-right"></i> disease{" "}
          </Link>
        </div>

        <div className={styles.box}>
          <h3>extra links</h3>
          <Link to="/myaccount">
            {" "}
            <i className="fas fa-arrow-right"></i> account info{" "}
          </Link>
          <Link to="/myorder">
            {" "}
            <i className="fas fa-arrow-right"></i> ordered items{" "}
          </Link>
          <Link to="/about">
            {" "}
            <i className="fas fa-arrow-right"></i> our serivces{" "}
          </Link>
        </div>

        <div className={styles.box}>
          <h3>contact info</h3>
          <Link to="#">
            {" "}
            <i className="fas fa-phone"></i> +123-456-7890{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-phone"></i> +111-222-3333{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-envelope"></i> Aarya@gmail.com{" "}
          </Link>
          <img src="./images/worldmap.png" className="map" alt="" />
        </div>
      </div>

      <div className={styles.share}>
        <Link to="#" className="facebook">
          <img src="./images/fbicon.png" alt="" />
        </Link>
        <Link to="#" className="twitter">
          <img src="./images/twiter.png" alt="" />
        </Link>
        <Link to="#" className="instagram">
          <img src="./images/insta.png" alt="" />
        </Link>
        <Link to="#" className="linkedin">
          <img src="./images/linkdin.png" alt="" />
        </Link>
        <Link to="#" className="pinterest">
          <img src="./images/pintrest.png" alt="" />
        </Link>
      </div>

      <div className={styles.credit}>
        {" "}
        created by <span>FFSD Group 39</span> | all rights reserved!{" "}
      </div>
    </section>
  );
}
