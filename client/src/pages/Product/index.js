import React, { useEffect } from "react";
import productsStyles from "./products.module.css";
import { Rating } from "react-simple-star-rating";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productactions";
import { addtocart } from "../../actions/cartactions";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default function Products() {
  const dispatch = useDispatch();
  const productdata = useSelector((state) => state.productreducer?.data?.data);
  const cartdata = useSelector((state) => state.cartreducer.data);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  console.log(cartdata);
  const existsInCart = (id) => {
    return cartdata.filter((item) => item._id === id).length !== 0;
  };

  const handleClick = (item) => {
    dispatch(addtocart(item));
  };

  console.log(productdata);
  return (
    <>
      <Navbar styles={productsStyles} />
      <div className={"container d-flex flex-wrap justify-content-center"}>
        {productdata &&
          productdata.map((ele) => {
            return (
              <div className="col-xs-12 col-md-4 mx-5">
                <div
                  className={`${productsStyles["prod-info-main"]} ${productsStyles["prod-wrap"]} ${productsStyles.clearfix}`}
                >
                  <div className="row">
                    <div className="col-md-5 col-sm-12 col-xs-12">
                      <div className={productsStyles["product-image"]}>
                        <img
                          src={ele.img}
                          className="img-responsive img-fluid "
                          style={{ maxHeight: "250px", minHeight: "250px" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-7 col-sm-12 col-xs-12">
                      <div className={productsStyles["product-deatil"]}>
                        <h5 className={productsStyles.name}>
                          <a href={`/product/${ele._id}`}>{ele.name}</a>
                          <a href="#">
                            <span>Medical</span>
                          </a>
                        </h5>
                        <p className={productsStyles["price-container"]}>
                          <span>{ele.price}</span>
                        </p>
                        <span className={productsStyles.tag1}></span>
                      </div>
                      <div className={productsStyles.description}>
                        <p>{ele.desc.slice(0, 30)}...</p>
                      </div>
                      <div
                        className={`${productsStyles["product-info"]} ${productsStyles["smart-form"]}`}
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <button
                              type="button"
                              className={`btn ${
                                !existsInCart(ele._id)
                                  ? "btn-danger"
                                  : "btn-default"
                              } btn-lg ${productsStyles["addcart"]}`}
                              disabled={existsInCart(ele._id)}
                              style={{
                                color: `${existsInCart(ele._id) && "black"}`,
                                marginRight: "10px",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                handleClick(ele);
                              }}
                            >
                              Add to cart
                            </button>

                            <a
                              href={`/product/${ele._id}`}
                              className="btn btn-info active"
                            >
                              More info
                            </a>
                          </div>
                          <div className="col-md-12">
                            <div className={productsStyles.rating}>
                              Rating:
                              <Rating
                                initialValue={ele.rating}
                                size={20}
                                allowHover={false}
                                disableFillHover={true}
                                readonly={ele.rating}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Footer styles={productsStyles} />
    </>
  );
}
