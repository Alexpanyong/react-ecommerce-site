import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_BOOKS_DATA } from "./actions/actionTypes";
import { receiveBooksData } from "./actions/actions";
import { fetchBooksData } from "../shared/api/api";

function* getBooksData() {
  try {
    const booksData = yield call(fetchBooksData);
    yield put(receiveBooksData(booksData));
  } catch (err) {
    console.log("Couldn't get books data:", err);
  }
}

export default function* rootSaga() {
  yield takeLatest(REQUEST_BOOKS_DATA, getBooksData);
}
