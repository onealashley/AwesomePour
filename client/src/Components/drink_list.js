import React, { Component } from 'react';
import API from '../utils/api';
import axios from "axios";

    class DrinkList extends Component {
        state = {
            drinks: []
        }


        componentDidMount() {
            this.loadDrinks();
        }

        loadDrinks = () => {
        
                // axios.get("/api/drinks")
                //     .then(res => {
                //         this.setState({ drinks: res.data });
                //     })
            
                // }
            API.getDrinks()
                .then(res => this.setState({ drinks: res.data }))
                .catch(err => console.log(err));
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