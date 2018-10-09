import React, { Component,} from 'react';
import API from '../utils/api';
import SearchBar from '../Components/search';
import Favorites from '../Components/favorites';
import { Link } from "react-router-dom";




class Drinks extends Component {
    state = {
        drinks: [],
        
        }


        componentDidMount() {
            this.loadDrinks();
        };
        
        

        loadDrinks = () => {
            API.getDrinks()
                .then (res => this.setState({ drinks: res.data }))
                .catch(err => console.log(err));
        };


        render() {
            return(   
                <div>


                    <div>
                        <Favorites />
                    </div>
                    <p>-----------------------------------------------------------------</p> 
                    {this.state.drinks.map(drink =>(
                        
                        <div className='drink_image'>
                            <Link to={"/detail/" + drink._id}>   
                                <img src = {drink.image} ></img>
                                <span>{drink.name}</span>
                            </Link>
                           
                        </div>

                    ))}
                </div>
            )
        }
    }

export default Drinks;