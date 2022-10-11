import React from "react";

export default function Footer({ styles }) {
  return (
    <section className={styles.footer}>
      <div className={styles["box-container"]}>
        <div className={styles.box}>
          <h3>our locations</h3>
          <a href="#">
            {" "}
            <i className="fas fa-map-marker-alt"></i> india{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-map-marker-alt"></i> USA{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-map-marker-alt"></i> russia{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-map-marker-alt"></i> france{" "}
          </a>
        </div>

        <div className={styles.box}>
          <h3>quick links</h3>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> home{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> featured{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> reviews{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> consultation{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> disease{" "}
          </a>
        </div>

        <div className={styles.box}>
          <h3>extra links</h3>
          <a href="/myaccount">
            {" "}
            <i className="fas fa-arrow-right"></i> account info{" "}
          </a>
          <a href="/myorder">
            {" "}
            <i className="fas fa-arrow-right"></i> ordered items{" "}
          </a>
          <a href="/about">
            {" "}
            <i className="fas fa-arrow-right"></i> our serivces{" "}
          </a>
        </div>

        <div className={styles.box}>
          <h3>contact info</h3>
          <a href="#">
            {" "}
            <i className="fas fa-phone"></i> +123-456-7890{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-phone"></i> +111-222-3333{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-envelope"></i> Aarya@gmail.com{" "}
          </a>
          <img src="./images/worldmap.png" className="map" alt="" />
        </div>
      </div>

      <div className={styles.share}>
        <a href="#" className="facebook">
          <img src="./images/fbicon.png" alt="" />
        </a>
        <a href="#" className="twitter">
          <img src="./images/twiter.png" alt="" />
        </a>
        <a href="#" className="instagram">
          <img src="./images/insta.png" alt="" />
        </a>
        <a href="#" className="linkedin">
          <img src="./images/linkdin.png" alt="" />
        </a>
        <a href="#" className="pinterest">
          <img src="./images/pintrest.png" alt="" />
        </a>
      </div>

      <div className={styles.credit}>
        {" "}
        created by <span>FFSD Group 39</span> | all rights reserved!{" "}
      </div>
    </section>
  );
}
