import React from "react";
import "./ShoppingBagItem.scss";

const ShoppingBagItem = ({ item, handleDeleteItem }) => {
  return (
    <div className="shoppingBagItemWrap">
      <div className="shoppingItemDetail">
        <div className="shoppingItemName">{item.title}</div>
        <div className="shoppingItemPrice">{item.price}</div>
      </div>
      <div className="shoppingItemAction">
        <div className="itemActionDelete" onClick={() => handleDeleteItem(item)}>
          <div className="deleteBtnStroke" id="stroke01"></div>
          <div className="deleteBtnStroke" id="stroke02"></div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingBagItem;
