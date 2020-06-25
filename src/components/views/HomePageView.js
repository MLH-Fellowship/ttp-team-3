import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//basic Home page
const HomePageView =(props)=> {
  if (!props.newestTen.length) {
    return <div className="NewTen">There are no new book.</div>;
  }
  console.log(props.newestTen);

//TypeError: Cannot read property 'map' of undefined
    return (
      <div>
      <h2>Welcome to Book Store</h2>
      <p> image</p>
      <p> Most recent Book</p>
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
//<img src={new10.volumeInfo.imageLinks.smallThumbnail} width="200px" alt={new10.id} />
HomePageView.propTypes = {
  newestTen: PropTypes.array.isRequired,
};

export default HomePageView;
