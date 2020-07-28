import React, { useState, useEffect } from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/actions";
import Button from "../../components/Button/Button";
import { routerPathNames } from "../../shared/config/routerPathNames";
import ShoppingBagItem from "../../components/ShoppingBagItem/ShoppingBagItem";
import { TAX_AMOUNT, SHIPPING_CHARGE_AMOUNT } from "../../shared/config/config";

const Cart = (props) => {
  console.log("Cart - props", props);
  const { resetSelectedBookState, handleGoToHomepage } = props;
  const { cart, selectedBook } = props.app;

  const taxAmount = TAX_AMOUNT;
  const shippingChargeAmount = SHIPPING_CHARGE_AMOUNT;

  const [consolidatedPrice, setConsolidatedPrice] = useState(0);

  const dispatch = useDispatch();

  const handleCancel = () => {
    window.location.href = routerPathNames.Home;
  };

  const getMonthString = (month) => {
    switch(month) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
      default:
          return "";
    }
  };

  const handleCheckOut = () => {
    const _dateObj = new Date();
    const _day = _dateObj.getDate();
    const _month = getMonthString(_dateObj.getMonth());
    const _year = _dateObj.getFullYear();
    const _itemsToCheckout = cart.map(item => ({...item, ordertime: `${_day} ${_month} ${_year}`}));
    dispatch(actions.checkOut(_itemsToCheckout));
    dispatch(actions.clearCart());
    window.location.href = routerPathNames.MyOrders;
  };

  const handleDeleteItem = (item = {}) => {
    dispatch(actions.deleteShoppingBagItem(item));
  };

  const getConsolidatedPrice = (items = []) => {
    if (!isEmpty(items)) {
      const consolidatedPrice = items.reduce((acc, item) => acc += +item.price.slice(1), 0);
      return consolidatedPrice;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    if (selectedBook) {
      resetSelectedBookState();
    };
  }, []);

  useEffect(() => {
    if (!isEmpty(cart)) {
      setConsolidatedPrice(getConsolidatedPrice(cart));
    };
  }, [cart]);

  return (
    <div className="cartWrap">
      {isEmpty(cart) 
        ? (<div className="emptyCartInfo">
              Your cart is empty.
              <div className="emptyCartBackToHome"><Link to="/" onClick={handleGoToHomepage}>Go back</Link></div>
            </div>)
        : (<div className="cartContainer">
            <div className="cartLeftPart">
              <div className="sectionTitle">Shipping Address</div>
              <div className="addressBox"></div>
              <div className="addressButtonContainer">
                <Button classAddon="addressButton" text="Save address" handleClick={()=>{}} />
                <Button classAddon="addressButton" text="Edit address" handleClick={()=>{}} />
              </div>
              
            </div>
            <div className="cartRightPart">
              <div className="sectionTitle">Shopping Bag</div>
              <div className="selectedBooksBox">
                {cart.map(item => <ShoppingBagItem key={item.timestamp} item={item} handleDeleteItem={handleDeleteItem} />)}
              </div>
              <div className="sectionTitle">Payment Info</div>
              <div className="paymentInfo">
                <div className="paymentInfoItem">
                  <div className="itemName">Item Price</div>
                  <div className="priceValue">{`$${consolidatedPrice.toFixed(2)}`}</div>
                </div>
                <div className="paymentInfoItem">
                  <div className="itemName">Tax</div>
                  <div className="priceValue">{`$${taxAmount.toFixed(2)}`}</div>
                </div>
                <div className="paymentInfoItem">
                  <div className="itemName">Shipping Charge</div>
                  <div className="priceValue">{`$${shippingChargeAmount.toFixed(2)}`}</div>
                </div>
                <div className="paymentInfoItem" id="totalPrice">
                  <div className="itemName">Total</div>
                  <div className="priceValue">{`$${(consolidatedPrice + taxAmount + shippingChargeAmount).toFixed(2)}`}</div>
                </div>
                <div className="paymentButtonContainer">
                  <Button classAddon="paymentButton" text="Cancel" handleClick={handleCancel} />
                  <Button classAddon="paymentButton" text="Check out" handleClick={handleCheckOut} />
                </div>
              </div>
            </div>
          </div>)
      }
    </div>
  );
};

export default Cart;
