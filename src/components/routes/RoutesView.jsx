import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePageContainer,
  SignupFormContainer,
  UserContainer,
  LoginFormContainer,
  EditUserFormContainer,
  BookListContainer,
  SearchBooksContainer,
  BookContainer,
  CartContainer,
  CheckoutContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/home" component={HomePageContainer} />
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/users/:id" component={UserContainer} />
      <Route exact path="/users/:id/edit" component={EditUserFormContainer} />
      <Route exact path="/books" component={BookListContainer} />
      <Route exact path="/books/:id" component={BookContainer} />
      <Route exact path="/books/s/search" component={SearchBooksContainer} />
      <Route exact path="/cart" component={CartContainer}/>
      <Route exact path="/checkout" component={CheckoutContainer}></Route>
    </Switch>
  );
};

export default RoutesView;
