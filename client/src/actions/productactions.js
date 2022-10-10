import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL_PRODUCTLIST,
} from "../constants/actionTypes";
import { fetchProductLists } from "../api/index";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const data = await fetchProductLists();
    dispatch({ type: FETCH_ALL_PRODUCTLIST, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
