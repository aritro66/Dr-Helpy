import { combineReducers } from "redux";
import productreducer from "./productreducer";
import diseasereducer from "./diseasereducer";
import authReducer from "./authreducer";

export default combineReducers({ productreducer, diseasereducer, authReducer });
