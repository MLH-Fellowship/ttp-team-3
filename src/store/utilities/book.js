import axios from "axios";
const custom = require('./apikey');
const API_KEY=custom.config.API_KEY
//Action types
const FETCH_BOOK = "FETCH_BOOK";

//Action creators
const fetchBook = (book) => {
  return {
    type: FETCH_BOOK,
    payload: book,
  };
};

//Thunks
export const fetchBookThunk = (id) => (dispatch) => {
  return axios
    .get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`)
    .then((res) => res.data)
    .then((book) => dispatch(fetchBook(book)))
    .catch((err) => console.log(err));
};
//Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
