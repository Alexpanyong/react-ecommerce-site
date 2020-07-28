import React from "react";
import "./OrderedItem.scss";

const OrderedItem = ({ item }) => {
  return (
    <div className="orderedItemWrap">
      <div className="orderHeader">
        <div className="orderTime">Order placed: {item.ordertime || "--"}</div>
      </div>
      <div className="orderDetailContainer">
        <div className="orderImage">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="orderDetail">
          <div className="itemTitle">{item.title}</div>
          <div className="itemPrice"><strong>Price: </strong>{item.price}</div>
          <div className="itemISBN"><strong>ISBN: </strong>{item.isbn13}</div>
        </div>
      </div>
    </div>
  )
}

export default OrderedItem;
