import React, { useEffect } from "react";
import "./Book.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/actions";
import Button from "../Button/Button";

const Book = ({ book }) => {
  const { image, title, subtitle } = book;

  const dispatch = useDispatch();

  const handleClickForDetail = () => {
    console.log("Cover clicked:", book);
    dispatch(actions.setSelectedBook(book));
  };

  const handleClickButton = () => {
    console.log("Book to add:", book);
    dispatch(actions.addToCart(book));
  };

  return (
    <div className="bookItemWrap">
      <div className="bookCoverWrap">
        <div className="bookCover" onClick={handleClickForDetail}>
          <Link className="bookCoverLink" to="/detail"><img src={image} alt={title} /></Link>
        </div>
      </div>
      <div className="bookTitle">{title}</div>
      {subtitle !== "" && <div className="bookSubtitle">{subtitle}</div>}
      <Button text="Add to cart"  handleClick={handleClickButton} />
    </div>
  )
};

export default Book;
