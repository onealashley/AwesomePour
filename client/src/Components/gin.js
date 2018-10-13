import React, {Component} from "react";
import API from '../utils/api';
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';


class Gin extends Component {
    state = {
        ginDrinks: []
    }


    componentDidMount() {
        this.ginDrinks();
        
    };

    ginDrinks = () => {
        API.ginDrinks()
            .then (res => this.setState({ ginDrinks: res.data }))
            .catch(err => console.log(err));
    };


        render() {
            return (
                <div>
                <h1>Gin</h1>
                <Carousel axis='horizontal' showThumbs={false}>
                    {this.state.ginDrinks.map((drink,index) => (
                    
    
                           <div key={index}>
                             <a href={drink.link}><img src={drink.image} style={{height:'600px'}}/>
                             <p className="legend">{drink.name}</p>
                             </a>
                           </div>
                    ))}
    
                </Carousel>
                </div>
<<<<<<< HEAD
            );
        }
=======

                {this.state.ginDrinks.map(ginDrink => (
                

                <div className='drink_image'>
                   
                   <Link to={"/detail/" + ginDrink._id}>   
                        <img src = {ginDrink.image} ></img>
                        <span>{ginDrink.title}</span>
                    </Link>
               </div>
                ))}
            </div>
        )
    }
>>>>>>> master

}

export default Gin;