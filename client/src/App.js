import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from './Components/search';

import nobleUpdate from "./utils/scaleConnect";
import Drinks from './pages/Drinks';


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
      <div className="App">
        <div className="App-header">
          <h2>AwesomePour</h2>
          <h3>Scale Weight: {this.state.scaleValue}</h3>

          <SearchBar />
        </div>
        <div>
          <Drinks />
        </div>
          
      </div>
    );
  }
}

export default App;
