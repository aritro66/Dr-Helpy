import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL_PRODUCTLIST,
  FETCH_PRODUCTLIST_BY_ID,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  ERROR,
  UPDATE_IMAGE,
  UPDATE_PRODUCT,
} from "../constants/actionTypes";
import {
  fetchProductLists,
  fetchProductListsById,
  addproduct,
  deleteproduct,
  updateimg,
  updateproduct,
} from "../api/index";

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

export const updateProductImage = (id, formData) => async (dispatch) => {
  try {
    const d = await updateimg(id, formData);
    console.log(d);
    dispatch({ type: UPDATE_IMAGE, payload: d.data });
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};

export const updateProductDetails = (id, formData) => async (dispatch) => {
  try {
    const d = await updateproduct(id, formData);
    console.log(d);
    dispatch({ type: UPDATE_PRODUCT, payload: d.data });
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};

export const AddProduct = (formData) => async (dispatch) => {
  try {
    const d = await addproduct(formData);
    console.log(d);
    dispatch({ type: ADD_PRODUCT, payload: d.data });
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};

export const DeleteProduct = (id) => async (dispatch) => {
  try {
    const d = await deleteproduct(id);
    console.log(d);
    dispatch({ type: DELETE_PRODUCT, payload: id });
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};
