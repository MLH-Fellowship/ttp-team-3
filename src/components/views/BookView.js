import React from "react";

const BookView = (props) => {
  return (
    <div className="book-container">
      <img
        src={props.book.volumeInfo.imageLinks.smallThumbnail}
        width="200px"
        alt={props.book.id}
      />
      <br />
      {props.book.volumeInfo.title}
    </div>
  );
};

export default BookView;
