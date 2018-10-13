import React, {Component} from "react";
import API from '../utils/api';
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';


class Bourbon extends Component {
    state = {
        bourbonDrinks: []
    }


    componentDidMount() {
        this.bourbonDrinks();
        
    };

    bourbonDrinks = () => {
        API.bourbonDrinks()
            .then (res => this.setState({ bourbonDrinks: res.data }))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Carousel axis='horizontal' showThumbs={false}>
                {this.state.bourbonDrinks.map((drink,index) => (
                

                       <div key={index}>
                         <img src={drink.image} style={{height:'600px'}}/>
                         <p className="legend">{drink.name}</p>

                       </div>
                ))}

            </Carousel>
        );
    }

}

export default Bourbon;