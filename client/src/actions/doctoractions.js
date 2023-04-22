import {
  fetchApprovedDoctors,
  fetchUnApprovedDoctors,
  approveDoctor as approve,
} from "../api";
import {
  START_LOADING,
  END_LOADING,
  FETCH_DOCTOR,
  APPROVE,
} from "../constants/actionTypes";

export const getDoctors = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const approved_doctors = await fetchApprovedDoctors();
    const unapproved_doctors = await fetchUnApprovedDoctors();
    dispatch({
      type: FETCH_DOCTOR,
      payload: {
        app_doctors: approved_doctors,
        unapp_doctors: unapproved_doctors,
      },
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const approveDoctor = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const approved = await approve(id);
    dispatch({ type: APPROVE, payload: approved.data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
