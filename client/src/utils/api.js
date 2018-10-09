import axios from 'axios';


export default {
    getDrinks: function(){
      return axios.get("/api/drinks");
    },

    favDrinks: function() {
      return axios.get("/api/favorites")
    },
    
    getDrink: function(id) {
      return axios.get("/api/drinks/" + id);
    },

    getDrinkName: function(name) {
      console.log(name, "inside api")
      return axios.get("/api/drinks?name=" + name).then(response => response.data[0])
    },
   
    deleteDrink: function(id) {
      return axios.delete("/api/drinks/" + id);
    },
    
    saveDrink: function(drinkData) {
      return axios.post("/api/drinks", drinkData);
    }
  };
  


