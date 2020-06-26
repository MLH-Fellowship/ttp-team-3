import React from "react";
import { Link } from "react-router-dom";
import { books } from "../../reducers";

const BookListView = props => {
    let searchBook;
  if (!props.books.length) {
    return <div>Nothing in the Search page</div>
  }
  else{
    searchBook=props.books
    searchBook.map(book =>{
        if(!book.volumeInfo.imageLinks){
            console.log(book)
            book.imgUrl="https://via.placeholder.com/305x242?text=Placeholder"
        }
        else{
            book.imgUrl=book.volumeInfo.imageLinks.thumbnail
        }
        if(book.saleInfo.saleability=="NOT_FOR_SALE"){
          book.sale=false;
          book.available="NOT_FOR_SALE";
        }
        else{
          book.sale=true;
          book.available="Available";
        }
       }
       
    );
  return (
    <div className="center"> 
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h2 className="display-4">Books</h2>
        </div>
      <div className="container">  
      <div className="row row-cols-1 row-cols-md-3" >
      {searchBook.map(book =>(
          <div className="card col-3" key={book.id}>
                      
          <Link to={`/books/${book.id}`}>
          <p><img src={book.imgUrl} height="305px" width="242px" alt={book.id} /></p>
          <h5 className="card-title">{book.volumeInfo.title}</h5>
            
          </Link>
      <div className="text-muted">{book.available}</div>
        </div>)
        )}
      </div>
      </div>
    </div>
  );
  }
};
  

export default BookListView;