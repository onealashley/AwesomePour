import React, { Component } from 'react';
import api from '../utils/api';

    class DrinkList extends Component {
        state = {
            drinks: []
        }

 
        componentDidMount() {
            this.loadDrinks();
            console.log('drinks should be loaded.')
        }

        loadDrinks = () => {

            api.getDrinks()
                .then(res => this.setState({ drinks: res.data.image}))
                .catch(err => console.log(err));
        };

        render() {
            return(
                <div>
2                   {JSON.stringify(this.state.drinks)}
                {this.state.drinks.map(drink =>(
                    drink.image
                ))}
                </div>
            )
        }
    }

export default DrinkList;