import React, { Component } from "react";
import logo from "./logo.svg";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Drinks from './pages/Drinks';
<<<<<<< HEAD
  
=======
import Create from './pages/Create';

>>>>>>> master

class App extends Component {
 

  render() {
    return (
<<<<<<< HEAD
      <div className="App">
      
        <div className="App-header">
          <h2>AwesomePour</h2>
          <SearchBar />
=======
      <Router>
        <div className="App">
          <div>
          <Route exact path="/" component={Drinks} />
          <Route exact path="/create" component={Create} />
          </div>
            
>>>>>>> master
        </div>
      </Router>
    );
  }
}

export default App;
