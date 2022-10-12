import {
  FETCH_ALL_DISEASELIST,
  FETCH_DISEASELIST_BY_ID,
  START_LOADING,
  END_LOADING,
} from "../constants/actionTypes";

const initialState = {
  data: [],
  loading: false,
};

export default function diseasereducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true };
    case END_LOADING:
      return { ...state, loading: false };
    case FETCH_ALL_DISEASELIST:
      return { ...state, data: action.payload };
    case FETCH_DISEASELIST_BY_ID:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
