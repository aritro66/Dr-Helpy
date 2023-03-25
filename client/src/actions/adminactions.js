import {
  FETCH_ALL_USERS,
  ERROR,
  BLOCK,
  UNBLOCK,
} from "../constants/actionTypes";
import {
  fetchUsers,
  block,
  unblock,
  addproduct,
  deleteproduct,
} from "../api/index";
import { getProducts } from "./productactions";

export const UserList = () => async (dispatch) => {
  try {
    const { data } = await fetchUsers();
    console.log(data);
    dispatch({ type: FETCH_ALL_USERS, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};

export const BlockUser = (id) => async (dispatch) => {
  try {
    await block(id);
    dispatch({ type: BLOCK, payload: id });
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};

export const UnBlockUser = (id) => async (dispatch) => {
  try {
    await unblock(id);
    dispatch({ type: UNBLOCK, payload: id });
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};

export const AddProduct = (formData) => async (dispatch) => {
  try {
    const d = await addproduct(formData).then((res) => {
      getProducts();
      return res;
    });
    console.log(d);
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};

export const DeleteProduct = (id) => async (dispatch) => {
  try {
    const d = await deleteproduct(id).then((res) => {
      getProducts();
      return res;
    });
    console.log(d);
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};
