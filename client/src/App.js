import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from './Components/search';
import Drinks from './pages/Drinks';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>AwesomePour</h2>
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
