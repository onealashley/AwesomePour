import React, {Component} from "react";
import API from '../utils/api';
import { Link } from "react-router-dom";

class Bourbon extends Component {
    state = {
        bourbonDrinks: []
    }


    componentDidMount() {
        this.bourbonDrinks();
        
    };

    bourbonDrinks = () => {
        API.bourbonDrinks()
            .then (res => this.setState({ bourbonDrinks: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div>
                    <p className="favLabel">Bourbon Drinks</p>
                </div>

                {this.state.bourbonDrinks.map(bourbon => (
                

                <div className='drink_image'>
                   
                   <Link to={"/detail/" + bourbon._id}>   
                        <img src = {bourbon.image} ></img>
                        <span>{bourbon.name}</span>
                    </Link>
               </div>
                ))}
            </div>
        )
    }

}

export default Bourbon;