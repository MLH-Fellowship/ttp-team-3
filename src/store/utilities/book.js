import axios from "axios";

// ACTION TYPE
const GET_BOOK_INFO = "GET_BOOK_INFO";

// ACTION CERATOR
const fetchBooks = (bookData) => {
  return {
    type: GET_BOOK_INFO,
    payload: bookData,
  };
};

// THUNK
export const fetchBooksThunker = () => (dispatch) => {
  return axios
    .get(
      "https://www.googleapis.com/books/v1/volumes?q=javascript&printType=books&key=AIzaSyDKscmfqF_tqvOmBYaDYpLb6TZtjwHrcR4"
    )
    .then((res) => res.data)
    .then((bookData) => dispatch(fetchBooks(bookData)))
    .catch((err) => console.log("Thunk err: ", err));
};

// REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOK_INFO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
