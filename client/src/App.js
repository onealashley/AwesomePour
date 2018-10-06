import React, { Component } from "react";
import logo from "./logo.svg";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Drinks from './pages/Drinks';
import Create from './pages/Create';
import Detail from './pages/Detail'


class App extends Component {
 

  render() {
    return (
      <Router>
        <div className="App">
          <div>
          <Route exact path="/" component={Drinks} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/details/:id" component={Detail} />
          </div>
            
        </div>
      </Router>
    );
  }
}

export default App;
