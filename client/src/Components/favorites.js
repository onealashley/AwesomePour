import React, {Component} from "react";
import API from '../utils/api';
import { Link } from "react-router-dom"

class Favorites extends Component {
    state = {
        favDrinks: []
    }


    componentDidMount() {
        this.favDrinks();
        
    };

    favDrinks = () => {
        API.favDrinks()
            .then (res => this.setState({ favDrinks: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div>
                    <p className="favLabel">Favorites</p>
                </div>

                {this.state.favDrinks.map(favDrink => (
                

                <div className='drink_image'>
                <Link to={"/detail/" + favDrink._id}>   
                        <img src = {favDrink.image} ></img>
                        <span>{favDrink.name}</span>
                    </Link>
               </div>
                ))}
            </div>
        )
    }

}

export default Favorites