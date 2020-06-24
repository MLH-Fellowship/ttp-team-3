import React, { Component } from "react";
import "./App.css";
import RoutesContainer from "../components/routes/RoutesContainer";
import { NavBarContainer } from "../components/containers";
class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBarContainer />
        <br></br>
        <br></br>
        <br></br>
        <header className="">
          <RoutesContainer />
        </header>
      </div>
    );
  }
}

export default App;
