import { ADD_TO_CART, DELETE_CART, DESC, INC } from "../constants/actionTypes";

export const addtocart = (item) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: item });
};

export const deletecart = (id) => (dispatch) => {
  dispatch({ type: DELETE_CART, payload: { id: id } });
};

export const inc = (id) => (dispatch) => {
  dispatch({ type: INC, payload: { id: id } });
};

export const desc = (id) => (dispatch) => {
  dispatch({ type: DESC, payload: { id: id } });
};
