import React, { Component,} from 'react';
import API from '../utils/api';
import SearchBar from '../Components/search';
import Favorites from '../Components/favorites';
import { Link } from "react-router-dom";
import Gin from "../Components/gin"
import Rum from "../Components/rum"
import Vodka from "../Components/vodka"
import Bourbon from "../Components/bourbon"
import Champagne from "../Components/champagne"
import Misc from "../Components/misc"
import Nonalcoholic from "../Components/nonalcoholic"




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
                    
                    <Gin />
                    <Rum />
                    <Vodka />
                    <Bourbon />
                    <Champagne />
                    <Misc />
                    <Nonalcoholic />
                </div>
            )
        }
    }

export default Drinks;