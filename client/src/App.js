import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from './Components/search';
<<<<<<< HEAD
import DrinkList from './Components/drink_list';
import nobleUpdate from "./utils/scaleConnect";
=======
import Drinks from './pages/Drinks';
>>>>>>> 2ccd46bd628d471b7286cadb9c3b5f1c4022de66


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
        <div>
          <Drinks />
        </div>
          
      </div>
    );
  }
}

export default App;
