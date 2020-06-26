import React, { Component } from "react";
import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import RoutesContainer from "../components/routes/RoutesContainer";
import { NavBarContainer } from "../components/containers";
import axios from "axios";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: {}
  //   };
  //   }

    // componentDidMount() {
    //   if (isSet(user)) {
    //     alert("I am an alert box!");
    //     }
    //   else{
    //     console.log('Hi logined');
    //   }
    // }

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
