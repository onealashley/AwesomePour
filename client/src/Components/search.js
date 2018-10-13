import React, {Component} from 'react';
import {Link} from "react-router-dom";
import API from "../utils/api"

class SearchBar extends Component {
   

    constructor(props) {
        super(props);

        this.state = {
            term: '',
            drinkName: "",
            drink: {},
            zero: 268371,
            weightReading: 0,
            weight:" Not Connected"
        }
    }

    handleInputChange = (event) => {

        const { value } = event.target;
        this.setState({
          term: value
        }, () => {
            console.log(this.state.term)
              API.getDrinkName(this.state.term)
                .then(response => {
                    console.log(response)
                    this.setState({drink: response})
                })
            
        })
      }

      navigateToDetailPage = () => {
          window.location.pathname = "detail/" + this.state.drink._id;
      }



    render() {
        return ( 
        <div className='app-header'>
            <h2>AwesomePour</h2>
            <Link

                to="/create"
                className={
                window.location.pathname === "/create" ? "nav-link active" : "nav-link"
                }
                className="linkBtn"
                >
                <button>Create your own Drink</button>
                
            </Link>

            <br></br>
            <br></br>

            <input 
            value = {this.state.term}
            onChange={this.handleInputChange} 
            />

           
            <button onClick={this.navigateToDetailPage}>Search By Name</button>
        </div>
        );
    }


    zero=()=>{
        this.setState({zero: this.state.weightReading});
    }



    connect=()=>{
    console.log('Requesting Bluetooth Device...');
    navigator.bluetooth.requestDevice(
      {filters: [{services: ['battery_service','1bc50001-0200-0aa5-e311-24cb004a98c5']}]})
    .then(device => {
      console.log('Connecting to GATT Server...');
      return device.gatt.connect();
    })
    .then(server => {
      console.log('Getting Battery Service...');
      return server.getPrimaryService('1bc50001-0200-0aa5-e311-24cb004a98c5');
    })
    .then(service => {
      console.log('Getting Battery Level Characteristic...');
      return service.getCharacteristic('1bc50002-0200-0aa5-e311-24cb004a98c5');
     })
    .then(characteristic => {
        var myCharacteristic = characteristic;
        return myCharacteristic.startNotifications().then(_ => {
          console.log('> Notifications started');
          myCharacteristic.addEventListener('characteristicvaluechanged',
              this.handleNotifications);
        });
      })
    .catch(error => {
      console.log('Argh! ' + error);
    });
};


handleNotifications=(event)=> {
    
    let value = event.target.value;
    let weightReading=new Uint32Array(event.target.value.buffer)[0];
    window.event=event;
    console.log(weightReading);
    this.setState({weightReading: weightReading});
    let weightValue=(weightReading-this.state.zero)/27341;

    this.setState({weight: weightValue.toFixed(2)});
    
}

}

  export default SearchBar;