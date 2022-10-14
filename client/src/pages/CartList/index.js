import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletecart, inc, desc } from "../../actions/cartactions";

export default function CartList() {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cartreducer.data);
  const handleDelete = (id) => {
    dispatch(deletecart(id));
  };

  const handleInc = (id) => {
    dispatch(inc(id));
  };

  const handleDesc = (id) => {
    dispatch(desc(id));
  };

  return (
    <section
      className="h-100"
      style={{ backgroundColor: "#eee", minHeight: "100vh" }}
    >
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div>
              <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
            </div>
            {!cartdata ? (
              <p>No product</p>
            ) : (
              cartdata.map((ele) => {
                return (
                  <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                      <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={ele.img}
                            className="img-fluid rounded-3"
                            alt="Cotton T-shirt"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <p className="lead fw-normal mb-2">{ele.name}</p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            className={`btn btn-link px-2 ${
                              ele.quantity === 0 ? "" : "desc"
                            }`}
                            disabled={ele.quantity === 0}
                            onClick={() => {
                              handleDesc(ele._id);
                            }}
                          >
                            <i className="fas fa-minus"></i>
                          </button>

                          <input
                            id="form1"
                            disabled
                            min="0"
                            name="quantity"
                            value={ele.quantity}
                            type="number"
                            className="form-control form-control-sm"
                          />

                          <button
                            className="btn btn-link px-2 inc"
                            onClick={() => {
                              handleInc(ele._id);
                            }}
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 className="mb-0">{ele.price}</h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a
                            className="text-danger delete"
                            onClick={() => {
                              handleDelete(ele._id);
                            }}
                          >
                            <i className="fas fa-trash fa-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}

            <div className="card">
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-warning btn-block btn-lg"
                  id="payment"
                >
                  Proceed to Pay
                </button>
                <h5 className="fw-bold mt-2">
                  <a href="/home">
                    <i className="fas fa-angle-left me-2"></i>Back to home
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
