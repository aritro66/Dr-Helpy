import { combineReducers } from "redux";
import productreducer from "./productreducer";
import diseasereducer from "./diseasereducer";
import authReducer from "./authreducer";
import cartreducer from "./cartreducer";
import adminreducer from "./adminreducer";
import orderreducer from "./orderreducer";

export default combineReducers({
  productreducer,
  diseasereducer,
  authReducer,
  cartreducer,
  adminreducer,
  orderreducer,
});
