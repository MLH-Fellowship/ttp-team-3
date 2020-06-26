import React from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles/style.css";

//basic Home page
const HomePageView = (props) => {
  let searchBook = [];
  if (!props.newestTen.length) {
    return <div>Loading</div>;
  } else {
    searchBook = props.newestTen;
    searchBook.map((book) => {
      if (!book.volumeInfo.imageLinks) {
        console.log(book);
        book.imgUrl = "https://via.placeholder.com/305x242?text=Placeholder";
      } else {
        book.imgUrl = book.volumeInfo.imageLinks.thumbnail;
      }
    });
  }

  return (
    <div>
      <h2>Welcome to Book Store</h2>
      <div className="imageArea">
        <div
          id="ImagecarouselIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li data-slide-to="0" class="active"></li>
            <li data-slide-to="1"></li>
            <li data-slide-to="2"></li>
          </ol>
          <div>
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                height="300px"
                src="https://springhillfresh.com/wp-content/uploads/2017/01/book-sale.jpg"
                alt="0"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                height="300px"
                src="https://www.aer.io/img/blog-images/backlist_title_blog.jpg"
                alt="1"
              />
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                height="300px"
                src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/hero/PROD-18189_Pride_Hero_06-01-sticker.jpg"
                alt="2"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className="bookArea">
        <h2>Most recent Book</h2>
        <div className="newestbook-container row">
          {searchBook.map((book) => (
            <div className="card col-3" key={book.id}>
              <Link to={`/books/${book.id}`}>
                <p>
                  <img
                    src={book.imgUrl}
                    height="305px"
                    width="242px"
                    alt={book.id}
                  />
                  <br />
                  {book.volumeInfo.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageView;
