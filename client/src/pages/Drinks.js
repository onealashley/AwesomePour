import React, { Component } from 'react';
import API from '../utils/api';


    class Drinks extends Component {
        state = {
            drinks: []
        }


        componentDidMount() {
            this.loadDrinks();
        }

        loadDrinks = () => {
            API.getDrinks()
                .then (res => this.setState({ drinks: res.data }))
                .catch(err => console.log(err));
        };

        render() {
            return(
                <div>
                    
                   <div className = 'favs'>
                    <div className = 'drink_image'>
                        Favorites will appear heere whenever we have them
                    </div>
                   </div>
                {this.state.drinks.map(drink =>(
                    
                    <div className='drink_image'>
                        <img src = {drink.image} ></img>
                        <span>{drink.name}</span>
                    </div>
                ))}
                </div>
            )
        }
    }

export default Drinks;