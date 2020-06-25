import React from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//basic Home page
const HomePageView =(props)=> {
  let searchBook=[]
  if (!props.newestTen.length) {
    return <div>Loading</div>
  }
  else{
    searchBook=props.newestTen
    searchBook.map(book =>{
        if(!book.volumeInfo.imageLinks){
            console.log(book)
            book.imgUrl="https://via.placeholder.com/305x242?text=Placeholder"
        }
        else{
            book.imgUrl=book.volumeInfo.imageLinks.thumbnail
        }
    });
  }
    return (
      <div>
      <h2>Welcome to Book Store</h2>
      <p> image</p>


      <h2> Most recent Book</h2>
          <div className="card-container row">
          {searchBook.map((book) => (
            <div className="card col-3" key={book.id}>
              <Link to={`/books/${book.id}`}>
                <p><img src={book.imgUrl} height="305px" width="242px" alt={book.id} />
                <br/>{book.volumeInfo.title}
                </p>
              </Link>
            </div>
          ))}
          </div>

      </div>
    );
}

export default HomePageView;
