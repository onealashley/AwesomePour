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
                
                {this.state.drinks.map(drink =>(
                    <img src = {drink.image}></img>
                    
                ))}
                </div>
            )
        }
    }

export default Drinks;