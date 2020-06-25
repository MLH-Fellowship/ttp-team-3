import React, { Component } from "react";
import { fetchBooksThunker } from "../../thunks";
import { connect } from "react-redux";
import { BookListView} from "../views";


class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    
    return <BookListView
    books={this.props.books}
    />
  }
}
const mapState = (state) => {
  return { books: state.books };
};
const mapDispatch = (dispatch) => {
  return {
    fetchBooks: () => dispatch(fetchBooksThunker()),
  };
};
export default connect (mapState,mapDispatch)(BookListContainer);
