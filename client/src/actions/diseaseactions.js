import {
  FETCH_ALL_DISEASELIST,
  FETCH_DISEASELIST_BY_ID,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";
import { fetchDiseaseLists, fetchDiseaseListsById } from "../api";

export const getDiseases = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const data = await fetchDiseaseLists();
    dispatch({ type: FETCH_ALL_DISEASELIST, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getDiseasesById = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const data = await fetchDiseaseListsById(id);
    dispatch({ type: FETCH_DISEASELIST_BY_ID, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
