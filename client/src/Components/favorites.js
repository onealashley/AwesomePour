import React, {Component} from "react";
import API from '../utils/api';
import { Link } from "react-router-dom"
import DeleteBtn from "./DeleteBtn"

class Favorites extends Component {
    state = {
        favDrinks: []
    }


    componentDidMount() {
        this.favDrinks();
        
    };

    deleteDrink = id => {
        API.deleteDrink(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };
    

    favDrinks = () => {
        API.favDrinks()
            .then (res => this.setState({ favDrinks: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className='favorites'>
                <div>
                    <p className="favLabel">Favorites</p>
                </div>

                {this.state.favDrinks.map(favDrink => (
                

                <div className='drink_image'>
                <Link to={"/detail/" + favDrink._id}>   
                        <img src = {favDrink.image} ></img>
                        <p>{favDrink.title}</p>
                    </Link>
               </div>
                ))}
            </div>
        )
    }

}

export default Favorites