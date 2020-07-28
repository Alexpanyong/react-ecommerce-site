import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import composedReducer from "./reducers/reducers";
import { pageNames } from "../shared/config/pageNames";
import rootSaga from "./sagas";

const initialState = {
  app: {
    currentPage: pageNames.Home,
    selectedBook: null,
    cart: [],
    myOrders: [],
  },
  data: {},
};

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

// const composeEnhancers = compose;

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, composedReducer);

export const store = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
