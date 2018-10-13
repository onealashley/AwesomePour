import React, {Component} from 'react';
import {Link} from "react-router-dom";
import API from "../utils/api"
import Modals from './modal'



class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: '',
            drinkName: "",
            drink: {}
        }
    }

    handleInputChange = (event) => {

        const { value } = event.target;
        this.setState({
          term: value
        }, () => {
            console.log(this.state.term)
              API.getDrinkName(this.state.term)
                .then(response => {
                    console.log(response)
                    this.setState({drink: response})
                })
            
        })
      }

      navigateToDetailPage = () => {
          window.location.pathname = "detail/" + this.state.drink._id;
      }



    render() {
        return ( 
        <div className='app-header'>
        
            <a href='/'><h1 id='title'>AwesomePour</h1></a>


            <input 
            value = {this.state.term}
            onChange={this.handleInputChange} 
            />

            <button className='btn btn-primary' onClick={this.navigateToDetailPage}>Search By Name</button>

            <Modals />
        </div>
        );
    }


}

export default SearchBar;