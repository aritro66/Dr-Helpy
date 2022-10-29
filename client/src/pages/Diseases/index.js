import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import diseaseStyles from "./disease.module.css";
import Styles from "../Home/home.module.css";
import { getDiseases } from "../../actions/diseaseactions";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Disease from "../../components/Diseases/Disease";

export default function Diseases() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.diseasereducer?.data?.data);
  useEffect(() => {
    dispatch(getDiseases());
  }, []);
  console.log(data);
  return (
    <>
      <Navbar styles={Styles} />
      <div className={diseaseStyles["header"]}>
        <h1>
          <strong>Diseases and their cure</strong>
        </h1>
      </div>
      <div style={{ padding: "15px 25px", lineHeight: "200%" }}>
        <div style={{ textAlign: "right" }}></div> <br />
        <div className={diseaseStyles["desc"]}>
          <p>Below is the list of common diseases and injuries sorted by A-Z</p>
        </div>
        <br />
        <div className={diseaseStyles["List"]}>
          <ul>
            {data &&
              data.map((ele) => {
                return <Disease disease={ele} />;
              })}
          </ul>
        </div>
      </div>
      <Footer styles={Styles} />
    </>
  );
}
