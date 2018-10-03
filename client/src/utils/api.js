import axios from 'axios';


export default {
    getDrinks: function(){
        return axios.get("/api/drinks");
    },
    
    getDrink: function(id) {
      return axios.get("/api/drinks/" + id);
    },
   
    deleteDrink: function(id) {
      return axios.delete("/api/drinks/" + id);
    },
    
    saveDrink: function(drinkData) {
      return axios.post("/api/drinks", drinkData);
    }
  };
  


