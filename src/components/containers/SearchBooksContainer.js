import React, { Component } from "react";
import { connect } from "react-redux";
import { SearchBooksView } from "../views";

class SearchProductsContainer extends Component {

  render() {

    return( 

    <SearchBooksView 
    books={this.props.books}
    />
    )}
}
// Map state to props;
const mapState = (state) => {
  return {
    books: state.books,
  };
};
export default connect(mapState)(SearchProductsContainer);