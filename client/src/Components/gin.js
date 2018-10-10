import React, {Component} from "react";
import API from '../utils/api';
import { Link } from "react-router-dom";

class Gin extends Component {
    state = {
        ginDrinks: []
    }


    componentDidMount() {
        this.ginDrinks();
        
    };

    ginDrinks = () => {
        API.ginDrinks()
            .then (res => this.setState({ ginDrinks: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div>
                    <p className="favLabel">Gin Drinks</p>
                </div>

                {this.state.ginDrinks.map(ginDrink => (
                

                <div className='drink_image'>
                   
                   <Link to={"/detail/" + ginDrink._id}>   
                        <img src = {ginDrink.image} ></img>
                        <span>{ginDrink.name}</span>
                    </Link>
               </div>
                ))}
            </div>
        )
    }

}

export default Gin;