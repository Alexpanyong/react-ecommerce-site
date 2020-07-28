import * as actions from "../actions/actionTypes";
import { isEmpty } from "lodash";

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
      case actions.ADD_TO_CART:
        return {
          ...state,
          cart: [...state.cart, action.item],
        };
      case actions.SET_SELECTED_BOOK:
        return {
          ...state,
          selectedBook: action.item,
        };
      case actions.CHECK_OUT:
        return {
          ...state,
          myOrders: isEmpty(state.myOrders) ? [...action.item] : [...action.item, ...state.myOrders],
        };
      case actions.CLEAR_CART:
        return {
          ...state,
          cart: [],
        };
      case actions.CLEAR_ORDER_RECORDS:
        return {
          ...state,
          myOrders: [],
        };
      case actions.DELETE_SHOPPING_BAG_ITEM:
        return {
          ...state,
          cart: state.cart.filter(item => item.timestamp !== action.item.timestamp || item.id !== action.item.id),
        };
    default:
      return state;
  }
};

export default appReducer;
