import React from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//basic Home page
const HomePageView =(props)=> {
  if (!props.newestEight.length) {
    return <div className="NewTen">There are no new book.</div>;
  }
  else{
    console.log(props.newestEight)
  }
//TypeError: Cannot read property 'map' of undefined
    return (
      <div>
      <h2>Welcome to Book Store</h2>
      <p> image</p>


      <h2>Most recent Book</h2>
          <div className="card-container row">
          {props.newestEight.map((new8) => (
            <div className="card col-3" key={new8.id}>
              <Link to={`/books/${new8.id}`}>
                <p><img src={new8.volumeInfo.imageLinks.smallThumbnail} width="200px" alt={new8.id} />
                <br/>{new8.volumeInfo.title}
                </p>
              </Link>
            </div>
          ))}
          </div>

      </div>
    );
}

export default HomePageView;
