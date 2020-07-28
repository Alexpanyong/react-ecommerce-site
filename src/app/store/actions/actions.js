import * as actions from "./actionTypes";

/*
 * For app state *
 */
export const setCurrentPage = (currentPage) => ({
  type: actions.SET_CURRENT_PAGE,
  currentPage,
});

export const addToCart = (item) => ({
  type: actions.ADD_TO_CART,
  item: {...item, timestamp: Date.now()},
});

export const setSelectedBook = (item) => ({
  type: actions.SET_SELECTED_BOOK,
  item,
});

export const checkOut = (item) => ({
  type: actions.CHECK_OUT,
  item,
});

export const clearCart = () => ({
  type: actions.CLEAR_CART,
});

export const clearOrderRecords = () => ({
  type: actions.CLEAR_ORDER_RECORDS,
});

export const deleteShoppingBagItem = (item) => ({
  type: actions.DELETE_SHOPPING_BAG_ITEM,
  item,
});

/*
 * For data state *
 */
export const fetchData = () => ({
  type: actions.FETCH_DATA,
});

export const requestBooksData = () => ({
  type: actions.REQUEST_BOOKS_DATA,
});

export const receiveBooksData = (data) => ({
  type: actions.RECEIVE_BOOKS_DATA,
  booksData: data,
});
