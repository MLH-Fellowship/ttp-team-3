import React from "react";

const BookCard = (props) => {
  return (
    <div className="card col-3">
      <img src={props.image} alt="xxx" />
      <h2>Title: {props.title}</h2>
      <h4>Author: {props.author}</h4>
    </div>
  );
};

export default function BookListView(props) {
  return (
    <React.Fragment>
      <div className="card-container row">
        {props.books.map((info) => (
          <BookCard
            key={info.id}
            image={info.volumeInfo.imageLinks.thumbnail}
            title={info.volumeInfo.title}
            author={info.volumeInfo.authors}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
