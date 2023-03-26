import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  ERROR,
  UPDATE_USER,
} from "../constants/actionTypes";
import { LogIn, LogOut, SignUp, UpdateUser } from "../api/index";

export const login = (formData, router) => async (dispatch) => {
  try {
    const { data } = await LogIn(formData);
    dispatch({ type: LOGIN, payload: data });

    router("/home");
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await SignUp(formData);

    dispatch({ type: SIGNUP, payload: data });

    router("/home");
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};

export const logout = (router) => async (dispatch) => {
  try {
    const data = await LogOut(
      JSON.parse(localStorage.getItem("profile")).refreshToken
    );
    dispatch({ type: LOGOUT, payload: data });

    router("/login");
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};

export const updateuser = (email, formData) => async (dispatch) => {
  try {
    const { data } = await UpdateUser(email, formData);

    dispatch({ type: UPDATE_USER, payload: data });
  } catch (error) {
    dispatch({ type: ERROR, error });
    console.log(error);
  }
};
