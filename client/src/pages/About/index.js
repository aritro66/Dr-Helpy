import React from "react";
import { servicesList, teamMemberList, iconsList } from "../../constants/about";
import "./about.css";

export default function About() {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          {" "}
          <span>about</span> Dr. Helpy
        </h1>

        <div className="row">
          <div className="image">
            <img
              src="images/medicine-concept-illustration_114360-2802.jpg"
              alt=""
            />
          </div>

          <div className="content">
            <h3>we take care of your healthy life</h3>
            <h4>We are - India's most convenient online pharmacy</h4>
            <p>
              Curewiki currently ranks #1 in India in the health category and
              among the top health sites. Curewiki offers almost 75 thousand
              pages of trusted health and wellness information including news,
              special reports, articles, drug information, interactive tools ,
              symptom analysis, medicine recommendations , doctor profiles,
              doctor recommendation , and much more.
            </p>

            <h3>Our Mission</h3>
            <p>
              Cure wiki's mission is to empower consumers with authentic,
              accurate, timely and personalized health information and provide
              them tools to allow for better management of health, provide
              better care to patients, and lead healthier lives.
            </p>
          </div>

          <section className="services" id="services">
            <h1 className="heading">
              {" "}
              WHAT <span>WE DO</span>{" "}
            </h1>

            <div className="box-container">
              {servicesList.map((ele) => {
                return (
                  <div className="box">
                    <i className={`fas ${ele.class}`}></i>
                    <h3>{ele.h3}</h3>
                    <p>{ele.p}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="team" id="team">
            <h1 className="heading">
              {" "}
              our <span>team</span>{" "}
            </h1>

            <div className="box-container">
              {teamMemberList.map((ele) => {
                return (
                  <div className="box">
                    <h3>{ele.h3}</h3>
                    <p>{ele.p}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="icons-container">
            {iconsList.map((ele) => {
              return (
                <div className="icons">
                  <i className={`fas ${ele.class}`}></i>
                  <h3>{ele.h3}</h3>
                  <p>{ele.p}</p>
                </div>
              );
            })}
          </section>
        </div>
      </section>

      <section className="home" id="home">
        <div className="image">
          <img src="images/contactus2.jpg" />
        </div>

        <div className="content">
          <h1 className="heading1">
            {" "}
            stay safe <span>stay healthy</span>{" "}
          </h1>
          <p>
            We're always here to help. Just give us a call at (888-666-9999) or
            drop us a line at feedback@dr.helpy.
          </p>
        </div>
      </section>
    </>
  );
}
