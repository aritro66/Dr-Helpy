import {
  FETCH_ALL_USERS,
  ERROR,
  BLOCK,
  UNBLOCK,
} from "../constants/actionTypes";
import { fetchUsers, block, unblock } from "../api/index";

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
