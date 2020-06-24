import axios from "axios";
const custom = require('./apikey');
const API_KEY=custom.config.API_KEY
// ACTION TYPE
const GET_BOOK_INFO = "GET_BOOK_INFO";

const FETCH_NEWEST_BOOKS = "FETCH_NEWEST_BOOKS";

// ACTION CERATOR
const fetchBooks = (bookData) => {
  return {
    type: GET_BOOK_INFO,
    payload: bookData,
  };
};

const fetchNewestBooks = (books) => {
  return {
    type: FETCH_NEWEST_BOOKS,
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


export const fetchNewestBooksThunker = () => (dispatch) => {
  return axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=""&orderBy=newest&key=${API_KEY}&maxResults=10`
    )
    .then((res) => res.data.items)
    .then((books) => dispatch(fetchNewestBooks(books)))
    .catch((err) => console.log("Thunk err: ", err));
};




// REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOK_INFO:
      return action.payload;
    case FETCH_NEWEST_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
