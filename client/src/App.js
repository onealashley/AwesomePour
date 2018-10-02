import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from './Components/search';
import DrinkList from './Components/drink_list';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>AwesomePour</h2>
          <SearchBar />
        </div>
        <DrinkList />
          
      </div>
    );
  }
}

export default App;
