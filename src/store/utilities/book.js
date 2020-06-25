import axios from "axios";

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
    .get(`api/books/${id}`)
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
