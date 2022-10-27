import { LOGIN, LOGOUT, SIGNUP, ERROR } from "../constants/actionTypes";
import { LogIn, LogOut, SignUp } from "../api/index";

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
