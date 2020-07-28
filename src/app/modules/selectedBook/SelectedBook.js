import React, { useEffect } from "react";
import "./SelectedBook.scss";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/actions";
import Button from "../../components/Button/Button";
import { routerPathNames } from "../../shared/config/routerPathNames";

const SelectedBook = (props) => {
  console.log("SelectedBook - props", props);
  const { showMobileMenu, toggleMobileMenu, handleGoToHomepage } = props;
  const { selectedBook } = props.app;

  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToCart = () => {
    dispatch(actions.addToCart(selectedBook));
  };

  const handleBuyNow = () => {
    dispatch(actions.addToCart(selectedBook));
    history.push(routerPathNames.Cart);
  };

  useEffect(() => {
    if (showMobileMenu) {
      toggleMobileMenu();
    };
  }, []);

  return (
    <div className="selectedBookWrap">
      {selectedBook 
        ? (<div key={selectedBook.id}>
            <div className="breadcrumb"><Link to={routerPathNames.Home} onClick={handleGoToHomepage}>{`<- Back`}</Link></div>
            <div className="detailContainer">
              <div className="detailLeftPart">
                <div className="detailImage"><img src={selectedBook.image} alt={selectedBook.title} /></div>
              </div>
              <div className="detailRightPart">
                <div className="detailTitle">{selectedBook.title}</div>
                <div className="detailPrice"><strong>Price: </strong>{selectedBook.price}</div>
                <div className="detailIsbn"><strong>ISBN: </strong>{selectedBook.isbn13}</div>
                <div className="detailDescription">
                  <div><strong>Description: </strong></div>
                  <div>{selectedBook.subtitle}</div>
                </div>
                <div className="buttonContainer">
                  <Button classAddon="detailButton" text="Add to cart" handleClick={handleAddToCart} />
                  <Button classAddon="detailButton" text="Buy now" handleClick={handleBuyNow} />
                </div>
                
              </div>
            </div>
          </div>)
        : (<div className="emptyDetailInfo">
            Oops, you haven't selected a book.
            <div className="emptyDetailBackToHome"><Link to={routerPathNames.Home} onClick={handleGoToHomepage}>Go to homepage</Link></div>
          </div>)
      }
    </div>
  );
};

export default SelectedBook;
