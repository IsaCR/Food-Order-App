import {
    CATEGORY_LIST_REQUEST,
    CATEGORY_LIST_SUCCESS,
    CATEGORY_LIST_FAILURE
  } from "../constants/categoryActionConstants";
  
  export const listCategoriesReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
      case CATEGORY_LIST_REQUEST:
        return { loading: true };
      case CATEGORY_LIST_SUCCESS:
        return { loading: false, success: true, categories: action.payload };
      case CATEGORY_LIST_FAILURE:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  