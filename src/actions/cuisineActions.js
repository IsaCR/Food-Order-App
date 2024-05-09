import axios from "axios";
import { GET_ALL_CUISINES_API } from "../constants/backend";

import {
    CUISINE_LIST_REQUEST,
    CUISINE_LIST_SUCCESS,
    CUISINE_LIST_FAILURE
} from "../constants/cuisineActionConstants";

export const listCuisines = () => async (dispatch) => {
  try {
    dispatch({
      type: CUISINE_LIST_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
      },
    };

    await axios
      .get(GET_ALL_CUISINES_API, config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: CUISINE_LIST_SUCCESS,
            payload: res.data.data,
          });
        } else {
          dispatch({
            type: CUISINE_LIST_FAILURE,
            payload: 'Not able to fetch the categories',
          });
        }
      });
  } catch (err) {
    dispatch({
      type: CUISINE_LIST_FAILURE,
      payload: 'Not able to fetch the categories',
    });
  }
};
