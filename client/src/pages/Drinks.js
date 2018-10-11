import React, { Component, } from 'react';
import API from '../utils/api';
import SearchBar from '../Components/search';
import Favorites from '../Components/favorites';
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/lib/Carousel'



class Drinks extends Component {
    state = {
        drinks: [],

    }


    componentDidMount() {
        this.loadDrinks();
    };



    loadDrinks = () => {
        API.getDrinks()
            .then(res => this.setState({ drinks: res.data }))
            .catch(err => console.log(err));
    };

    setRef = (ref, index) => {
        if (index === 0) {
            console.log(index)
            this.ref = ref;
            this.ref.classList.add("active");
        }
    }

    render() {
        console.log(this.ref)
        return (
            <div className='container'>


                <div>
                    <Favorites />
                </div>
                <p>-----------------------------------------------------------------</p>

                {/* <div>
                    {this.state.drinks.map(drink => (
                        <div className='drink_image'>
                            <Link to={"/details/" + drink._id}>
                                <img src={drink.image} ></img>
                                <span>{drink.name}</span>
                            </Link>

                        </div>
                    ))}
                </div> */}
            </div>
        )
    }
}

export default Drinks;