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


  imageStyle = {
    width: "100vw",
    height: "50vh",
  };

  imageStyle

    return (
      <div>
        <h2>Welcome to Book Store</h2>
        
        <p>
          <div id="ImagecarouselIndicators" class="carousel slide" data-ride="carousel" style={this.imageStyle}
>
            <ol class="carousel-indicators">
              <li data-target="" data-slide-to="0" class="active"></li>
              <li data-target="" data-slide-to="1"></li>
              <li data-target="" data-slide-to="2"></li>
            </ol>
            <div>
              <div class="carousel-item active">
                <img class="d-block w-100" height="300px" src="https://springhillfresh.com/wp-content/uploads/2017/01/book-sale.jpg" alt="First"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" height="300px" src="https://www.aer.io/img/blog-images/backlist_title_blog.jpg" alt="Second"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" height="300px" src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/hero/PROD-18189_Pride_Hero_06-01-sticker.jpg" alt="Third"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true" ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true" ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </p>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <p>
        <h2>Most recent Book</h2>
          <div className="newestbook-container row" >
          {searchBook.map((book) => (
            <div className="card col-3" key={book.id}>
              <Link to={`/books/${book.id}`}>
                <p><img src={book.imgUrl} height="305px" width="242px" alt={book.id} />
                <br/>{book.volumeInfo.title}
                </p>
              </Link>
            </div>
          ))}
          </div></p>
        </div>
    );
}

export default HomePageView;
