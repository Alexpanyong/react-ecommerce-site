import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import "./App.scss";
import TopBar from "./layout/topBar/TopBar";
import { Home, SelectedBook, MyOrders, Cart } from "./modules";
import * as actions from "./store/actions/actions";
import { pageNames } from "./shared/config/pageNames";
import { routerPathNames } from "./shared/config/routerPathNames";

function App(props) {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleSetCurrentPage = (pageName) => {
    dispatch(actions.setCurrentPage(`${pageName}`));
  };

  const resetSelectedBookState = () => {
    dispatch(actions.setSelectedBook(null));
  };

  const handleGoToHomepage = () => {
    if (showMobileMenu) {
      toggleMobileMenu();
    }
    handleSetCurrentPage(pageNames.Home);
  };

  useEffect(() => {
    /* * Initialization - fetch data from api * */
    dispatch(actions.requestBooksData());
    return () => {};
  }, [dispatch]);

  const topBarProps = { ...app, handleSetCurrentPage, showMobileMenu, toggleMobileMenu, handleGoToHomepage };
  const homeProps = { ...props, resetSelectedBookState };
  const selectedBookProps = { ...props, showMobileMenu, toggleMobileMenu, handleGoToHomepage };
  const myOrdersProps = { ...props, resetSelectedBookState, handleGoToHomepage };
  const cartProps = { ...props, resetSelectedBookState, handleGoToHomepage };

  return (
    <div id="AppContainer" className="App">
      <Router>
        <TopBar {...topBarProps} />
        <Switch>
          <Route exact path={routerPathNames.Home}>
            <Home {...homeProps} />
          </Route>
          <Route path={routerPathNames.Detail}>
            <SelectedBook {...selectedBookProps} />
          </Route>
          <Route path={routerPathNames.MyOrders}>
            <MyOrders {...myOrdersProps} />
          </Route>
          <Route path={routerPathNames.Cart}>
            <Cart {...cartProps} />
          </Route>
          <Route path={routerPathNames.Default}>
            <Home {...homeProps} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  app: state.app,
  data: state.data,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
