import React from "react";
import "./styles/BookView.css";

const BookView = (props) => {
  let searchBook;
  if (!props.book.volumeInfo) {
    return <div>loading</div>;
  } else {
    searchBook = props.book;

    if (!searchBook.volumeInfo.imageLinks) {
      searchBook.imgUrl =
        "https://via.placeholder.com/305x242?text=Placeholder";
    } else {
      searchBook.imgUrl = searchBook.volumeInfo.imageLinks.thumbnail;
    }
  }
  return (
    <div className="book-container">
      <img src={searchBook.imgUrl} alt={props.book.id} />
      <div id="title-and-desc">
        <h1 id="title">{searchBook.volumeInfo.title}</h1>
        <p>{searchBook.volumeInfo.description}</p>
      </div>
    </div>
  );
};

export default BookView;
