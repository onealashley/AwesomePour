import React, {Component} from 'react';
import {Link} from "react-router-dom";
import API from "../utils/api"


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
        
<<<<<<< HEAD
            <h1 id='title'>AwesomePour</h1>
            <Link
=======
            <h2>AwesomePour</h2>
            {/* <Link
                
>>>>>>> master
                to="/create"
                className={
                window.location.pathname === "/create" ? "nav-link active" : "nav-link"
                }
                className="linkBtn"
                >
                <button>Create your own Drink</button>
                
            </Link> */}

            <br></br>
            <br></br>

            <input 
            value = {this.state.term}
            onChange={this.handleInputChange} 
            />
            
            <button onClick={this.navigateToDetailPage}>Search By Name</button>
        </div>
        );
    }


}

export default SearchBar;