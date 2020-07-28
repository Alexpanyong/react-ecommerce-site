import React, { useState, useEffect } from "react";
import "./Home.scss";
import { isEmpty } from "lodash";
import Book from "../../components/Book/Book";

const Home = (props) => {
  const { app, data, resetSelectedBookState } = props;
  const { booksData = {} } = data;
  const { books = [] } = booksData;
  const { cart, selectedBook } = app;

  const [bookList, setBookList] = useState([]);

  console.log("Home - props", props);

  useEffect(() => {
    if (selectedBook) {
      resetSelectedBookState();
    };
  }, []);

  useEffect(() => {
    if (isEmpty(booksData)) return;
    console.log("Home - booksData", booksData);
    if (booksData.books) {
      const _books = booksData.books.map(book => ({id: Math.random(), ...book}));
      console.log("Home - bookList", _books);
      setBookList(_books);
    }
    
    return () => {};
  }, [booksData]);

  return (
    <div className="homeWrap">
      {!isEmpty(bookList) && <ul className="bookList">
        {bookList.map(book => <li className="itemBook" key={book.id}>
          <Book book={book} cart={cart}/>
        </li>)}
      </ul>}
    </div>
  );
};

export default Home;
