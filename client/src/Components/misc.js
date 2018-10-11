import React, {Component} from "react";
import API from '../utils/api';
import { Link } from "react-router-dom";

class Misc extends Component {
    state = {
        miscDrinks: []
    }


    componentDidMount() {
        this.miscDrinks();
        
    };

    miscDrinks = () => {
        API.miscDrinks()
            .then (res => this.setState({ miscDrinks: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div>
                    <p className="favLabel">Miscellaneous Drinks</p>
                </div>

                {this.state.miscDrinks.map(misc => (
                

                <div className='drink_image'>
                   
                   <Link to={"/detail/" + misc._id}>   
                        <img src = {misc.image} ></img>
                        <span>{misc.name}</span>
                    </Link>
               </div>
                ))}
            </div>
        )
    }

}

export default Misc;