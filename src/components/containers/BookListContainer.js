import React, { Component } from "react";
import { fetchBooksThunker } from "../../thunks";
import { connect } from "react-redux";
import { BookListView } from "../views/index";

class BookListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: "javascript",
    };
  }

  componentDidMount() {
    this.props.fetchBooks();
  }
  check() {
    console.log(this.props.book[0].volumeInfo.imageLinks.smallThumbnail);
    this.setState({
      ...this.state,
      books: this.props.book,
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <BookListView books={this.state.books} />
        </div>
        <button onClick={() => this.check()}>BOOKS</button>
      </React.Fragment>
    );
  }
}
const mapState = (state) => {
  console.log(state.books);
  console.log("***", state.book, "***");
  return { book: state.books };
};
const mapDispatch = (dispatch) => {
  return {
    fetchBooks: () => dispatch(fetchBooksThunker()),
  };
};
export default connect(mapState, mapDispatch)(BookListContainer);
