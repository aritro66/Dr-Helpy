import { combineReducers } from "redux";
import productreducer from "./productreducer";
import diseasereducer from "./diseasereducer";

export default combineReducers({ productreducer, diseasereducer });
