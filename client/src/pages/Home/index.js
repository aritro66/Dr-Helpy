import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productactions";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  homeSectionImageList,
  iconSectionList,
  consultations,
} from "../../constants/home";
import "./home.css";
import CarouselSlider from "react-carousel-slider";

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log(data);

  return (
    <>
      <Navbar />
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3>Buy Medicines from here</h3>
            <p>Get best quality medicines from us at reasonable prices.</p>
            <a href="/products" className="btn">
              Buy now
            </a>
          </div>

          <div className="swiper image-slider">
            <div className="swiper-wrapper">
              <CarouselSlider
                slideItems={homeSectionImageList}
                sliderBoxStyle={{
                  height: "29rem",
                  width: "40rem",
                  padding: 0,
                  background: "transparent",
                  overflowY: "hidden",
                }}
                manner={{ autoSliding: { interval: "2.6s" } }}
                itemsStyle={{
                  padding: "0px",
                  margin: "0px 0px",
                  height: "100%",
                  width: "100%",
                }}
                buttonSetting={{
                  placeOn: "middle-inside",

                  style: {
                    left: {
                      margin: "0px 0px 0px 5px",
                    },
                    right: {
                      margin: "0px 0px 0px 5px",
                    },
                  },
                }}
              />
            </div>
            <img src="images/stand.png" className="stand" alt="" />
          </div>
        </div>
      </section>
      <section className="icons-container">
        {iconSectionList.map((ele) => {
          return (
            <div className="icons">
              <i className={`fas ${ele.class}`}></i>
              <div className="content">
                <a href="#">
                  <h3>{ele.h3}</h3>
                </a>
                <p>{ele.p}</p>
              </div>
            </div>
          );
        })}
      </section>
      <section id="consultation">
        <h1 class="heading1">
          <span> Consult top doctors online for any health concern </span>
        </h1>
        <p>
          {" "}
          Private online consultations with verified doctors in all specialists
        </p>
        <div class="consult-container">
          {consultations.map((ele) => {
            return (
              <div class="box">
                <div class="image">
                  <a href="/doctor">
                    {" "}
                    <img src={ele.src} />{" "}
                  </a>
                </div>
                <div class="text">{ele.text}</div>
              </div>
            );
          })}
        </div>
      </section>
      <section class="deal">
        <div class="content">
          <h3>deal of the day</h3>
          <h1>Get a Appointment With World Best Doctor</h1>
          <p>
            You are in safe hands, choose the experts and get consulation online
          </p>
          <a href="/doctor" class="btn">
            Get Now
          </a>
        </div>

        <div class="image">
          <img src="images/doctor_img.png" alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
}
