import React, {Component} from "react";
import API from '../utils/api';
import { Link } from "react-router-dom";

class Vodka extends Component {
    state = {
        vodkaDrinks: []
    }


    componentDidMount() {
        this.vodkaDrinks();
        
    };

    vodkaDrinks = () => {
        API.vodkaDrinks()
            .then (res => this.setState({ vodkaDrinks: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div>
                    <p className="favLabel">Vodka Drinks</p>
                </div>

                {this.state.vodkaDrinks.map(vodka => (
                

                <div className='drink_image'>
                   
                   <Link to={"/detail/" + vodka._id}>   
                        <img src = {vodka.image} ></img>
                        <span>{vodka.name}</span>
                    </Link>
               </div>
                ))}
            </div>
        )
    }

}

export default Vodka;