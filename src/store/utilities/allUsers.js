import axios from "axios";

// ACTION TYPES;
const FETCH_ALL_USERS = "FETCH_ALL_USERS";
const ADD_USER = "ADD_USER";
const EDIT_USER = "EDIT_USER";
const DELETE_USER = "DELETE_USER";

// ACTION CREATORS;
const fetchAllUser = (users) => {
  return {
    type: FETCH_ALL_USERS,
    payload: users,
  };
};

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

const editUser = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};

const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

// THUNK CREATORS;
export const fetchAllUsersThunk = () => (dispatch) => {
  return axios
    .get("/api/users")
    .then((res) => res.data)
    .then((users) => dispatch(fetchAllUser(users)))
    .catch((err) => console.log(err));
};

export const addUserThunk = (user, ownProps) => (dispatch) => {
  return axios
    .post("/api/users", user)
    .then((res) => res.data)
    .then((newUser) => {
      const tweakedUser = { ...newUser, items: [] };
      dispatch(addUser(tweakedUser));
      ownProps.history.push(`/users/${newUser.id}`);
    })
    .catch((err) => console.log(err));
};

export const editUserThunk = (id, user) => (dispatch) => {
  return axios
    .put(`/api/users/${id}`, user)
    .then((res) => res.data)
    .then((updatedUser) => {
      dispatch(editUser(updatedUser));
    })
    .catch((err) => console.log(err));
};

export const deleteUserThunk = (id) => (dispatch) => {
  return axios
    .delete(`/api/users/${id}`)
    .then((res) => res.data)
    .then(() => dispatch(deleteUser(id)))
    .catch((err) => console.log(err));
};

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return action.payload;
    case ADD_USER:
      return [...state, action.payload];
    case EDIT_USER:
      return state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );

    case DELETE_USER:
      return state.filter((user) => user.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
