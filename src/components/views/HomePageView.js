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
        book.imgUrl = "https://via.placeholder.com/305x242?text=Placeholder";
      } else {
        book.imgUrl = book.volumeInfo.imageLinks.thumbnail;
      }
      if (book.saleInfo.saleability == "NOT_FOR_SALE") {
        book.sale = false;
        book.available = "NOT_FOR_SALE";
      } else {
        book.sale = true;
        book.available = "Available";
      }
    });
  }

  return (
    <div id="home-page">
      <h2>
        <u>Welcome to Book Store</u>
      </h2>
      <div className="imageArea">
        <div
          id="ImagecarouselIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li data-slide-to="0" className="active"></li>
            <li data-slide-to="1"></li>
            <li data-slide-to="2"></li>
          </ol>
          <div>
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                height="300px"
                src="https://springhillfresh.com/wp-content/uploads/2017/01/book-sale.jpg"
                alt="0"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                height="300px"
                src="https://www.aer.io/img/blog-images/backlist_title_blog.jpg"
                alt="1"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                height="300px"
                src="https://dispatch.barnesandnoble.com/content/dam/ccr/boutique/hero/PROD-18189_Pride_Hero_06-01-sticker.jpg"
                alt="2"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
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

      <div className="bookArea">
        <br />
        <br />
        <br />
        <h2>
          <u>Most recent Book</u>
        </h2>
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
                  <h5 className="card-title">{book.volumeInfo.title}</h5>
                </p>
              </Link>
              <div className="text-muted">{book.available}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageView;
