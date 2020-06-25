import axios from "axios";
const custom = require('./apikey');
const API_KEY=custom.config.API_KEY
// ACTION TYPE
const GET_BOOK_INFO = "GET_BOOK_INFO";
const FETCH_NEWEST_EIGHT = "FETCH_NEWEST_EIGHT";
const SEARCH_BOOKS="SEARCH_BOOKS";
// ACTION CERATOR
const fetchBooks = (bookData) => {
  return {
    type: GET_BOOK_INFO,
    payload: bookData,
  };
};

const fetchNewestEight = (eightBooks) => {
  return {
    type: FETCH_NEWEST_EIGHT,
    payload: eightBooks,
  };
};

const searchProducts=(books)=>{
  return {
    type: SEARCH_BOOKS,
    payload: books,
  };
};
// THUNK
export const fetchBooksThunker = () => (dispatch) => {
  return axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=javascript&printType=books&key=${API_KEY}`
    )
    .then((res) => res.data.items)
    .then((bookData) => dispatch(fetchBooks(bookData)))
    .catch((err) => console.log("Thunk err: ", err));
};

export const fetchNewestEightThunk = () => (dispatch) => {
  return axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=""&key=${API_KEY}&maxResults=8`
    )
    .then((res) => res.data.items)
    .then((eightBooks) => dispatch(fetchNewestEight(eightBooks)))
    .catch((err) => console.log("Thunk err: ", err));
};


export const searchBooksThunk = (search, ownProps) => (dispatch) => {
    let url=`https://www.googleapis.com/books/v1/volumes?q=${Object.values(search)[0]}&printType=books&key=${API_KEY}`
  return axios
    .get(url)
    .then((res) => res.data.items)
    .then((books) => {
      dispatch(searchProducts(books))
      ownProps.history.push("/books/s/search");
    })
    .catch((err) => console.log(err));
};

// REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOK_INFO:
      return action.payload;
    case FETCH_NEWEST_EIGHT:
      return action.payload;
    case SEARCH_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
