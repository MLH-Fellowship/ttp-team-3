import React from "react";

const BookView = (props) => {
  let searchBook;
  let addcart;
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
        if(searchBook.saleInfo.saleability=="NOT_FOR_SALE"){
          searchBook.sale=false;
          searchBook.price=null;
        }
        else{
          searchBook.sale=true;
          searchBook.price=searchBook.saleInfo.listPrice.amount;
        }
       }
       if(searchBook.sale){
          addcart=<button className="btn btn-sm btn-success" onClick={props.handleSubmit}> Add to cart </button>
       }
       else{
        addcart=<div>NOT_FOR_SALE</div>
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
      {addcart}
    </div>
  );
};

export default BookView;
