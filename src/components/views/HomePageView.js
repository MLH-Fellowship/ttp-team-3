import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//basic Home page
const HomePageView =(props)=> {
  // if (!props.newestTen.length) {
  //   return <div className="NewTen">There are no new book.</div>;
  // }



  console.log(props.newestTen);

//TypeError: Cannot read property 'map' of undefined
    return (
      <div>
      <h2>Welcome to Book Store</h2>
      <p> image</p>
      <p> Most recent Book</p>
          <div>
            
          {props.newestTen.map((new10) => (
            <div key={new10.id}>
              <Link to={`/books/${new10.id}`}>
                <h3>{new10.volumeInfo.title}</h3>
                <img src={new10.volumeInfo.imageLinks.thumbnail} width="200px" alt={new10.volumeInfo.title} />
              </Link>
            </div>
          ))}
          </div>

      </div>
    );
}

HomePageView.propTypes = {
  newestTen: PropTypes.array.isRequired,
};

export default HomePageView;
