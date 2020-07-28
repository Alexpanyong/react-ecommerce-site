import React, { useEffect } from "react";
import "./MyOrders.scss";
import { useHistory } from "react-router-dom";
import { isEmpty } from "lodash";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/actions";
import Button from "../../components/Button/Button";
import OrderedItem from "../../components/OrderedItem/OrderedItem";
import { routerPathNames } from "../../shared/config/routerPathNames";

const MyOrders = (props) => {
  console.log("MyOrders - props", props);
  const { resetSelectedBookState, handleGoToHomepage } = props;
  const { myOrders, selectedBook } = props.app;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleGoBackToHome = () => {
    handleGoToHomepage();
    history.push(routerPathNames.Home);
  };

  const handleClearRecords = () => {
    dispatch(actions.clearOrderRecords());
  };

  useEffect(() => {
    if (selectedBook) {
      resetSelectedBookState();
    };
  }, []);

  return (
    <div className="myOrdersWrap">
      {isEmpty(myOrders) 
        ? (<div className="emptyOrderInfo">
            Your order records is clean.
            <div className="emptyOrderBackToHome">
              <Button text="Go back" handleClick={handleGoBackToHome} />
            </div>
          </div>)
        : (myOrders.map(item => <OrderedItem key={item.id} item={item} />))
      }
      {!isEmpty(myOrders) && <Button text="Clear records" handleClick={handleClearRecords} />}
    </div>
  );
};

export default MyOrders;
