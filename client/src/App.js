import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from './Components/search';
import DrinkList from './Components/drink_list';
import nobleUpdate from "./utils/scaleConnect";


class App extends Component {

state = {
    scaleValue: "nothing yet....    :("
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
          <h1>{this.scaleValue}</h1>
          <SearchBar />
        </div>
        <DrinkList />
          
      </div>
    );
  }
}

export default App;
