import React, { Component } from "react";
import API from '../utils/api';
import { Link } from "react-router-dom";

class Champagne extends Component {
    state = {
        champagneDrinks: []
    }


    componentDidMount() {
        this.champagneDrinks();

    };

    champagneDrinks = () => {
        API.champagneDrinks()
            .then(res => this.setState({ champagneDrinks: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div>
                    <p className="favLabel">Champagne Drinks</p>
                </div>

                {this.state.champagneDrinks.map(champagne => (


                    <div className='drink_image'>

                        <Link to={"/detail/" + champagne._id}>
                            <img src={champagne.image} ></img>
                            <span>{champagne.name}</span>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }

}

export default Champagne;