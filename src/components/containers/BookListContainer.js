import React, { Component } from "react";
import { fetchBooksThunker } from "../../thunks";
import { connect } from "react-redux";
import { BookListView } from "../views/index";

class BookListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      search: "c++",
      filter: "",
    };
  }

  componentDidMount() {
    this.props.fetchBooks(this.state.search);
    // this.props.book;
  }
  //this function is invoked when the search button is clicked
  setBookData = () => {
    this.setState({
      ...this.state,
      books: this.props.book,
    });
  };
  handleFIlter = (event) => {
    this.setState({
      ...this.state,
      filter: event.target.value,
    });
  };
  render() {
    // const { books, filter } = this.state;
    // // const { publishedDate: date } = this.state.books.volumeInfo;

    // const handleSort = books.sort((x, y) => {
    //   if (filter === "newest") {
    //     return (
    //       parseInt(y.volumeInfo.publishedInfo.substring(0, 4)) -
    //       parseInt(x.volumeInfo.publishedInfo.substring(0, 4))
    //     );
    //   } else if (filter === "oldest") {
    //     return (
    //       parseInt(x.volumeInfo.publishedInfo.substring(0, 4)) -
    //       parseInt(y.volumeInfo.publishedInfo.substring(0, 4))
    //     );
    //   } else {
    //     console.log("######( None )#########");
    //   }
    // });
    return (
      <React.Fragment>
        <div className="container">
          <BookListView
            // books={handleSort}
            books={this.state.books}
            setBookData={() => this.setBookData()}
          />
        </div>
        {/* <button onClick={() => this.setBookData()}>BOOKS</button> */}
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
    fetchBooks: (search) => dispatch(fetchBooksThunker(search)),
  };
};
export default connect(mapState, mapDispatch)(BookListContainer);
