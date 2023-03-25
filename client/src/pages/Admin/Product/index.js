import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddProduct, DeleteProduct } from "../../../actions/adminactions";
import Product from "../../../components/Admin/Product";
import { getProducts } from "../../../actions/productactions";

export default function ProductS() {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    console.log(state);
    return state.productreducer?.data?.data;
  });
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log(data);
  const handleChange = (e) => {
    // console.log(e);
    if (e.target.name === "img_upload") {
      console.log("kk");
      setForm({ ...form, [e.target.name]: e.target.files[0] });
    } else setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddProduct(form));
    setShowModal(false);
  };
  const handleDelete = (id) => {
    console.log(id);
    dispatch(DeleteProduct(id));
  };
  console.log(form);
  return (
    <>
      <div
        className="modal fade show"
        id="modalLoginForm"
        tabindex="-1"
        ariaLabelledby="myModalLabel"
        style={{
          display: showModal ? "block" : "none",
          paddingRight: "17px",
          background: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">
                Add Product
              </h4>
              <button
                type="button"
                className="close"
                dataDismiss="modal"
                ariaLabel="Close"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <span ariaHidden="true">X</span>
              </button>
            </div>
            <form enctype="multipart/form-data" onSubmit={handleSubmit}>
              <div className="modal-body mx-3">
                <div className="md-form mb-5">
                  <label>Product Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    required
                    className="form-control validate"
                  />
                </div>
                <div className="md-form mb-5">
                  <label>Product Price</label>
                  <input
                    type="number"
                    name="price"
                    step=".01"
                    onChange={handleChange}
                    required
                    className="form-control validate"
                  />
                </div>
                <div className="md-form mb-5">
                  <label>Product Rating</label>
                  <input
                    type="number"
                    name="rating"
                    onChange={handleChange}
                    required
                    className="form-control validate"
                  />
                </div>
                <div className="md-form mb-5">
                  <label>Product Description</label>
                  <input
                    type="text"
                    name="desc"
                    onChange={handleChange}
                    required
                    className="form-control validate"
                  />
                </div>
                <div className="md-form mb-5">
                  <label>Product Image</label>
                  <input
                    type="file"
                    name="img_upload"
                    accept="image/*"
                    onChange={handleChange}
                    required
                    className="form-control validate"
                  />
                </div>
              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button
                  className="btn btn-default waves-effect waves-light"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container h-100 w-100 py-5">
        <div className="row d-flex p-5 h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between">
              <h3 className="display-6 mb-4 text-black">Products </h3>
              <button
                className="btn btn-success mb-4"
                style={{ fontSize: "15px" }}
                onClick={() => {
                  setShowModal(true);
                }}
              >
                +Add
              </button>
            </div>
            {!data ? (
              <p>No products added</p>
            ) : (
              <table className="table table-hover table-responsive fs-md-3 fs-4">
                <thead>
                  <tr>
                    <th scope="col">Sno.</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((ele, index) => {
                    return (
                      <Product
                        index={index}
                        product={ele}
                        handleDelete={handleDelete}
                      />
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
