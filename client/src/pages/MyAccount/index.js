import React from "react";
import { useSelector } from "react-redux";
import myaccountStyles from "./myaccount.module.css";
import { Link } from "react-router-dom";

export default function MyAccount() {
  const data = useSelector((state) => state.authReducer);
  return (
    <div id={myaccountStyles.myaccount}>
      <div className={myaccountStyles["main-content"]}>
        <div
          className={`${myaccountStyles["container"]} ${myaccountStyles["mt-7"]}`}
        >
          <h2 className={myaccountStyles["mb-5"]}>My Account</h2>
          <div className={myaccountStyles["row"]}>
            <div
              className={`${myaccountStyles["col-xl-8"]} ${myaccountStyles["m-auto"]} ${myaccountStyles["order-xl-1"]}`}
            >
              <div
                className={`${myaccountStyles["card"]} ${myaccountStyles["bg-secondary"]} ${myaccountStyles["shadow"]}`}
              >
                <div
                  className={`${myaccountStyles["card-header"]} ${myaccountStyles["bg-white"]} ${myaccountStyles["border-0"]}`}
                >
                  <div
                    className={`${myaccountStyles["row"]} ${myaccountStyles["align-items-center"]}`}
                  >
                    <div className={myaccountStyles["col-8"]}>
                      <h3 className={myaccountStyles["mb-0"]}>My account</h3>
                    </div>
                  </div>
                </div>
                <div className={myaccountStyles["card-body"]}>
                  <h6
                    className={`${myaccountStyles["heading-small"]} ${myaccountStyles["text-muted"]} ${myaccountStyles["mb-4"]}`}
                  >
                    User information
                  </h6>
                  <div className={myaccountStyles["pl-lg-4"]}>
                    <div className={myaccountStyles["row"]}>
                      <div className={myaccountStyles["col-lg-6"]}>
                        <div
                          className={`${myaccountStyles["form-group"]} ${myaccountStyles["focused"]}`}
                        >
                          <label
                            className={myaccountStyles["form-control-label"]}
                            forHtml="input-username"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            id={myaccountStyles["input-username"]}
                            className={`${myaccountStyles["form-control"]} ${myaccountStyles["form-control-alternative"]}`}
                            placeholder="Username"
                            value={data.fname + " " + data.lname}
                          />
                        </div>
                      </div>
                      <div className={myaccountStyles["col-lg-6"]}>
                        <div className={myaccountStyles["form-group"]}>
                          <label
                            className={myaccountStyles["form-control-label"]}
                            forHtml="input-email"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            id={myaccountStyles["input-email"]}
                            className={`${myaccountStyles["form-control"]} ${myaccountStyles["form-control-alternative"]}`}
                            style={{ textTransform: "none" }}
                            value={data.email}
                            placeholder="jesse@example.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={myaccountStyles["row"]}>
                      <div className={myaccountStyles["col-lg-6"]}>
                        <div
                          className={`${myaccountStyles["form-group"]} ${myaccountStyles["focused"]}`}
                        >
                          <label
                            className={myaccountStyles["form-control-label"]}
                            forHtml="input-first-name"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            id={myaccountStyles["input-first-name"]}
                            className={`${myaccountStyles["form-control"]} ${myaccountStyles["form-control-alternative"]}`}
                            placeholder="First name"
                            value={data.fname}
                          />
                        </div>
                      </div>
                      <div className={myaccountStyles["col-lg-6"]}>
                        <div
                          className={`${myaccountStyles["form-group"]} ${myaccountStyles["focused"]}`}
                        >
                          <label
                            className={myaccountStyles["form-control-label"]}
                            forHtml="input-last-name"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            id={myaccountStyles["input-last-name"]}
                            className={`${myaccountStyles["form-control"]} ${myaccountStyles["form-control-alternative"]}`}
                            placeholder="Last name"
                            value={data.lname}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={myaccountStyles["row"]}>
                      <div className={myaccountStyles["col-lg-6"]}>
                        <div
                          className={`${myaccountStyles["form-group"]} ${myaccountStyles["focused"]}`}
                        >
                          <label
                            className={myaccountStyles["form-control-label"]}
                            forHtml="input-first-name"
                          >
                            Phone no
                          </label>
                          <input
                            type="text"
                            id={myaccountStyles["input-first-name"]}
                            className={`${myaccountStyles["form-control"]} ${myaccountStyles["form-control-alternative"]}`}
                            placeholder="First name"
                            value={data.phno}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="my-4" />
                </div>
              </div>
              <h5 className="fw-bold mt-2">
                <Link to="/home">
                  <i className="fas fa-angle-left me-2"></i>Back to home
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
