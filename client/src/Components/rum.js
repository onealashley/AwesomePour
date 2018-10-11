import React, {Component} from "react";
import API from '../utils/api';
import { Link } from "react-router-dom";

class Rum extends Component {
    state = {
        rumDrinks: []
    }


    componentDidMount() {
        this.rumDrinks();
        
    };

    rumDrinks = () => {
        API.rumDrinks()
            .then (res => this.setState({ rumDrinks: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div>
                    <p className="favLabel">Rum Drinks</p>
                </div>

                {this.state.rumDrinks.map(rum => (
                

                <div className='drink_image'>
                   
                   <Link to={"/detail/" + rum._id}>   
                        <img src = {rum.image} ></img>
                        <span>{rum.name}</span>
                    </Link>
               </div>
                ))}
            </div>
        )
    }

}

export default Rum;