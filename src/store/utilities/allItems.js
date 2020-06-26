import axios from "axios";
// ACTION TYPES;
const FETCH_ALL_ITEMS = "FETCH_ALL_ITEMS";
const ADD_ITEM = "ADD_ITEM";
const EDIT_ITEM = "EDIT_ITEM";
const DELETE_ITEM = "DELETE_ITEM";

// ACTION CREATORS;
const fetchAllItems = (books) => {
  return {
    type: FETCH_ALL_ITEMS,
    payload: books,
  };
};

const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

const editItem = (item) => {
  return {
    type: EDIT_ITEM,
    payload: item,
  };
};

const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};

// THUNK CREATORS;
export const fetchAllItemsThunk = () => (dispatch) => {
  return axios
    .get("/api/books")
    .then((res) => res.data)
    .then((books) => dispatch(fetchAllItems(books)))
    .catch((err) => console.log(err));
};

export const addItemThunk = (item, ownProps) => (dispatch) => {
  console.log(item)
  return axios
    .post("/api/books", item)
    .then((res) => res.data)
    .then((newUser) => {
      console.log(newUser)
      const tweakedUser = { ...newUser, books: [] };
      dispatch(addItem(tweakedUser));
       ownProps.history.push(`/cart/`);
    })
    .catch((err) => console.log(err));
};

export const editItemThunk = (id, item) => (dispatch) => {
  return axios
    .put(`/api/books/${id}`, item)
    .then((res) => res.data)
    .then((updatedUser) => {
      dispatch(editItem(updatedUser));
    })
    .catch((err) => console.log(err));
};

export const deleteItemThunk = (id) => (dispatch) => {
  return axios
    .delete(`/api/books/${id}`)
    .then((res) => res.data)
    .then(() => dispatch(deleteItem(id)))
    .catch((err) => console.log(err));
};

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_ITEMS:
      return action.payload;
    case ADD_ITEM:
      return [...state, action.payload];
    case EDIT_ITEM:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );

    case DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
