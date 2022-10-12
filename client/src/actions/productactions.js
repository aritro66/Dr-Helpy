import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL_PRODUCTLIST,
  FETCH_PRODUCTLIST_BY_ID,
} from "../constants/actionTypes";
import { fetchProductLists, fetchProductListsById } from "../api/index";

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

export const getProductsById = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const data = await fetchProductListsById(id);
    dispatch({ type: FETCH_PRODUCTLIST_BY_ID, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
