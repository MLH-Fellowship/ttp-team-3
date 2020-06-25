// A barrel file for our reducers, which will be combined and passed into the Redux store we create;
// The aliases of reducers in this file will be assigned as the names of the keys in the Redux store, with the values being the respective individual reducers;
export { default as allUsers}from "../store/utilities/allUsers";
export { default as user}from "../store/utilities/user";
export { default as books}from "../store/utilities/allBooks";
export { default as book}from "../store/utilities/book";
export { default as allItems}from "../store/utilities/allItems";