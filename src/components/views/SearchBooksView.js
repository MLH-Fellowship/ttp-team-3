import React from "react";
import { Link } from "react-router-dom";

const SearchBooksView = props => {
  if (!props.books.length) {
    return <div>Nothing in the Search page</div>
  }

  return (
    <div className="center"> 
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h2 className="display-4">Search Result</h2>
        </div>
      <div className="container">  
      <div className="row row-cols-1 row-cols-md-3" >
      {props.books.map(book => (
          <div className="card col-3" key={book.id}>
          <Link to={`/books/${book.id}`}>
            <p><img src={book.volumeInfo.imageLinks.smallThumbnail} width="200px" alt={book.id} />
            <br/>{book.volumeInfo.title}
            </p>
          </Link>
        </div>
        ))}
      </div>
      </div>
    </div>
  );
};


export default SearchBooksView;