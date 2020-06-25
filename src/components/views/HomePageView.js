import React from "react";
//import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//basic Home page
const HomePageView =(props)=> {
  if (!props.newestTen.length) {
    return <div className="NewTen">There are no new book.</div>;
  }
  if(props.newestTen.volumeInfo) {
  console.log(props.newestTen.volumeInfo.imageLinks.smallThumbnail);
  }
//TypeError: Cannot read property 'map' of undefined
    return (
      <div>
      <h2>Welcome to Book Store</h2>
      <p> image</p>


      <h2> Most recent Book</h2>
          <div className="card-container row">
          {props.newestTen.map((new10) => (
            <div className="card col-3" key={new10.id}>
              <Link to={`/books/${new10.id}`}>
                <p><img src={new10.volumeInfo.imageUrl} width="200px" alt={new10.id} />
                <br/>{new10.volumeInfo.title}
                </p>
              </Link>
            </div>
          ))}
          </div>

      </div>
    );
}

export default HomePageView;
