import axios from 'axios';


export default {
    getDrinks: function(){
        return axios.get("/api/drinks");
    }
}