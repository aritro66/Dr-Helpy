import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders } from "../../actions/orderactions";

export default function Orders() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.authReducer);
  const orderdata = useSelector((state) => state.orderreducer.data);
  useEffect(() => {
    console.log(data.email);
    dispatch(fetchOrders(data.email));
  }, []);
  console.log(orderdata);
  return (
    <section
      className="h-100"
      style={{ backgroundColor: "#eee", minHeight: "100vh" }}
    >
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div>
              <h3 className="fw-normal mb-0 text-black">My Orders</h3>
            </div>
            {orderdata?.length == 0 ? (
              <p>No product</p>
            ) : (
              <>
                {orderdata.map((ele, index) => {
                  return (
                    <>
                      <div
                        className="mb-4 p-4 mt-2"
                        style={{ backgroundColor: "white" }}
                      >
                        <h3>Order {index + 1}</h3>
                        <h5>
                          Date{" "}
                          {`${new Date(ele.createdAt).getDate()}/${
                            new Date(ele.createdAt).getMonth() + 1
                          }/${new Date(ele.createdAt).getFullYear()}`}
                          Time{" "}
                          {`${new Date(ele.createdAt).getHours()}:${
                            new Date(ele.createdAt).getMinutes() + 1
                          }:${new Date(ele.createdAt).getSeconds()}`}
                        </h5>
                        {JSON.parse(ele.order).map((dataele) => {
                          return (
                            <div className="card rounded-3">
                              <div className="card-body p-4">
                                <div className="row d-flex justify-content-between align-items-center">
                                  <div className="col-md-2 col-lg-2 col-xl-2">
                                    <img
                                      src={`/${dataele.img}`}
                                      className="img-fluid rounded-3"
                                      alt="Cotton T-shirt"
                                    />
                                  </div>
                                  <div className="col-md-3 col-lg-3 col-xl-3">
                                    <p className="lead fw-normal mb-2">
                                      {dataele.name}
                                    </p>
                                  </div>
                                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                    <input
                                      id="form1"
                                      disabled
                                      min="0"
                                      name="quantity"
                                      value={`${dataele.quantity}`}
                                      type="number"
                                      className="form-control form-control-sm"
                                    />
                                  </div>
                                  <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h5 className="mb-0">{dataele.price}</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
