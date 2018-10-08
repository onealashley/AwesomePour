import React, { Component } from "react";
import logo from "./logo.svg";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import SearchBar from './Components/search';

import nobleUpdate from "./utils/scaleConnect";
import Drinks from './pages/Drinks';
import Create from './pages/Create';
import Detail from './pages/Detail'
import SearchBar from './Components/search'


class App extends Component {

state = {
    scaleValue: "Not Connected"
}

componentDidMount() {
  nobleUpdate(this.handleScaleUpdate)
}

handleScaleUpdate = newScaleValue => {
  this.setState({ scaleValue: newScaleValue });
}

  render() {
    return (
      <Router>
        <div className="App">
          <div>
          <h3>Scale Weight: {this.state.scaleValue}</h3>
            <SearchBar />
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
