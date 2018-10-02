import React, { Component } from 'react';
import API from '../utils/api';

    class DrinkList extends Component {
        state = {
            drinks: []
        }


        componentDidMount() {
            this.loadDrinks();
        }

        loadDrinks = () => {

            API.getDrinks()
                .then(res => this.setState({ drinks: res.data }))
                .catch(err => console.log(err));
            // console.log(this.state.drinks);
        };

        render() {
            return(
                <div>
                   {JSON.stringify(this.state.drinks)}
                {this.state.drinks.map(drink =>(
                    drink.image
                ))}
                </div>
            )
        }
    }

export default DrinkList;