import React from "react";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  return (
    <div className="card-container col-4">
      <div className="card-body">
        <img className="card-img-top" src={props.image} alt="xxx" />
        <br />
        <span className="card-text">{props.title}</span>
        <br />
        <span className="card-text text-muted">Author:{props.author}</span>
        <br />
        <span className="card-text text-muted">
          Published: {props.publishedDate}
        </span>
        <br />
      </div>
    </div>
  );
};

export default function BookListView(props) {
  return (
    <React.Fragment>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Filter
          </label>
        </div>
        <select
          className="custom-select"
          id="inputGroupSelect01"
          onChange={props.handleSelect}
        >
          <option defaultValue>Choose...</option>
          <option value="newest">Sort by newest</option>
          <option value="oldest">Sort by oldest</option>
          {/* <option value="TBA">Three</option> */}
        </select>
      </div>
      <button onClick={props.setBookData}>BOOKS</button>
      <div className="container row">
        {props.books.map((info) => (
          <BookCard
            key={info.id}
            image={info.volumeInfo.imageLinks.thumbnail}
            title={info.volumeInfo.title}
            author={info.volumeInfo.authors}
            publishedDate={info.volumeInfo.publishedDate}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
