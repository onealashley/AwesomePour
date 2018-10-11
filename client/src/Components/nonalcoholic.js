import React, {Component} from "react";
import API from '../utils/api';
import { Link } from "react-router-dom";

class Nonalcoholic extends Component {
    state = {
        nonalcoholicDrinks: []
    }


    componentDidMount() {
        this.nonalcoholicDrinks();
        
    };

    nonalcoholicDrinks = () => {
        API.nonalcoholicDrinks()
            .then (res => this.setState({ nonalcoholicDrinks: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div>
                    <p className="favLabel">Non-Alcoholic Drinks</p>
                </div>

                {this.state.nonalcoholicDrinks.map(nonalcoholic => (
                

                <div className='drink_image'>
                   
                   <Link to={"/detail/" + nonalcoholic._id}>   
                        <img src = {nonalcoholic.image} ></img>
                        <span>{nonalcoholic.name}</span>
                    </Link>
               </div>
                ))}
            </div>
        )
    }

}

export default Nonalcoholic;