import React from "react";

const BookView = (props) => {
  let searchBook;
  if (!props.book.volumeInfo) {
    return <div>loading</div>
  }
  else{
      searchBook=props.book
     
        if(!searchBook.volumeInfo.imageLinks){
          searchBook.imgUrl="https://via.placeholder.com/305x242?text=Placeholder"
        }
        else{
          searchBook.imgUrl=searchBook.volumeInfo.imageLinks.thumbnail
        }
       }
  return (
    <div className="book-container">
      <img
        src={searchBook.imgUrl}
        width="200px"
        alt={props.book.id}
      />
      <br />
      {searchBook.volumeInfo.title}
    </div>
  );
};

export default BookView;
