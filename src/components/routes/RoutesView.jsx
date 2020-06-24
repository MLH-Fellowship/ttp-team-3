import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePageContainer,
  SignupFormContainer,
   UserContainer,
   LoginFormContainer,
   EditUserFormContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/home" component={HomePageContainer} />
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/users/:id" component={UserContainer}/>
      <Route exact path="/users/:id/edit" component={EditUserFormContainer}/>
    </Switch>
  );
};

export default RoutesView;
