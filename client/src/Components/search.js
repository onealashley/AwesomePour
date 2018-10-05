import React, {Component} from 'react';
import {Link} from "react-router-dom";

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    render() {
        return (
        <div>
            <Link
                
                to="/create"
                className={
                window.location.pathname === "/create" ? "nav-link active" : "nav-link"
                }
                class="linkBtn"
                >
                <button>Create your own Drink</button>
                
            </Link>

            <input 
            value = {this.state.term}
            onChange = {event => this.setState({term: event.target.value})} 
            />
        </div>
        );
    }


}

export default SearchBar;