/* eslint-disable indent */
import * as actions from "../actions/actionTypes";

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    // case actions.FETCH_DATA:
    //   console.log("dataReducer - FETCH_DATA");
    //   return {
    //     ...state,
    //   };
    case actions.RECEIVE_BOOKS_DATA:
      return {
        ...state,
        booksData: action.booksData,
      };
    default:
      return state;
  }
};

export default dataReducer;
