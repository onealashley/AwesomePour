const mongoose = require("mongoose");
const db = require("../models");

// This file empties the drink collection and inserts the drinks below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactdrinklist"
);


const drinkSeed = [
    {
        name: "Airmail",
        ingredients: [
            "1oz white rum",
            ".5oz fresh lime",
            ".5 oz honey syrup"
        ],
        directions: "shake, strain, top with champagne & lime wheel",
        image: "./images/airmail.jpg"
    },
    {
        name: "Amaretto Sour",
        ingredients: [
            "1.5 oz Disaronno",
            ".75 oz. Overproof Bourbon",
            "1 oz. Fresh Lemon",
            "Barspoon. Simple Syrup (1:1)",
            "1⁄2 an egg white"
        ],
        directions: "dry shake, shake with ice, fine strain, ice cubes, lemon twist, cherry",
        image: "./images/amaretto-sour.jpg"
    },
    {
        name: "American Highball",
        ingredients: [
            "1.5 oz. Italian Rosso Vermouth",
            "1.5 oz. Campari"
        ],
        directions: "build in a colins glass with ice, Top with club soda, an orange twist, and a half wheel of an orange",
        image: "./images/highball.jpg"
    },
    {
        name: "Aperol Spritz",
        ingredients: [
            "2 oz. Aperol",
            "2 oz. Chilled club soda",
            "2 oz. Champagne"
        ],
        directions: "Build in a white wine glass filled with cracked ice. Stir gently to combine. Garnish with a half wheel of orange",
        image: "./images/aperol-spritz.jpg"
    },
    {
        name: "Arsenic and old lace",
        ingredients: [
            "2 oz. London Dry Gin",
            ".75 oz. Dry Vermouth",
            ".25 oz. Crème de Violette"
        ],
        directions: "Stri, strain over an absinthe rinsed cup. Garnish with an orange twist.",
        image: "./images/arsenic-and-old-lace.jpg"
    },
    {
        name: "Aviation",
        ingredients: [
            "2 oz. Plymouth Gin",
            ".75 oz. Fresh Lemon",
            ".5 oz. Luxardo Maraschino Liqueur",
            ".25 oz. Simple Syrup (1:1)"
        ],
        directions: "Shave, strain over a creme de violette rinsed cup with brandied cherry in a glass.",
        image: "./images/avation.jpg"
    },
    {
        name: "Bee's Knees",
        ingredients: [
            "2 oz. Plymouth Gin",
            ".75 oz. Fresh Lemon",
            ".75 oz. Honey Syrup (2:1)"
        ],
        directions: "Shanke and strain. Garnish with a lemon wheel.",
        image: "./images/bees-knees.jpg"
    },
    {
        name: "Bellini",
        ingredients: [
            ".4 oz. Crème de Peche",
            "1 oz. Peach Nectar (Kearn’s)"
        ],
        directions: "Top with Champagne",
        image: "./images/bellini.jpg"
    }, 
    {
        name: "Bijou",
        ingredients: [
            "1.5 oz. Plymouth Gin",
            "1 oz. Italian Rosso Vermouth",
            ".75 oz. Green Chartreuse",
            "1 dash Orange Bitters"
        ],
        directions: "Stir and strain. Garnish with a lemon twist",
        image: "./images/bijou.jpg"
    },
    {
        name: "Black Russian",
        ingredients: [
            "2 oz. Vodka",
            ".75 oz. Kahlua"
        ],
        directions: "Stir, serve over rocks",
        image: "./images/black-russian.jpg"
    },
    {
        name: "Bloody Mary",
        ingredients: [
            "2 oz. Vodka",
            "<.75 oz. Fresh Lemon",
            "Heavy pinch smoked salt",
            "Heavy pinch ground black pepper",
            "3 dashes hot sauce",
            "5 dashes Worchestershire sauce",
            "5 oz. V8 Tomato Juice"
        ],
        directions: "Roll between tins with ice until chilled. Strain into a collons glass over ice. Garnish with olives ona skewer, a lemon wedge and a celery stick.",
        image: "./images/bloody-mary.jpg"
    },
    {
        name: "Boulevardier",
        ingredients: [
            "1.5 oz. Bourbon",
            ".75 oz. Campari",
            ".75 oz. Italian Rosso Vermouth"
        ],
        directions: "Short stir and pour over rocks. Garnish with an orange twist.",
        image: "./images/boulevardier.jpg"
    },
    {
        name: "Bramble",
        ingredients: [
            "1.5 oz. Overproof Gin",
            ".75 oz. Fresh Lemon",
            ".5 oz. Simple Syrup (1:1)"
        ],
        directions: "Gently crush 5 blackberries in bottom of a large rocks glass and add crushed ice on top. Shake and Strain into a prepped glass. Top with crushed ice and float .5oz of Creme de Mure. Garnish with a lemon wheel.",
        image: "./images/bramble.jpg"
    },
    {
        name: "Brandy Alexander",
        ingredients: [
            "1 oz. Cognac",
            "1 oz. Dark Crème de Cacao",
            "1 oz. Heavy Cream"
        ],
        directions: "Shake and strain. Garnish with Nutmeg.",
        image: "./images/brandy-alexander.jpg"
    },
    {
        name: "Brooklynite",
        ingredients: [
            "2 oz. Aged Jamaican Rum",
            ".75 oz. Fresh Lime",
            ".75 oz. Honey Syrup (2:1)",
            "2 dashes Angostura Bitters"
        ],
        directions: "Shake and strain. Garnish with a lime wheel.",
        image: "./images/brooklynite.jpg"
    }, 
    {
        name: "Caipirina",
        ingredients: [
            "2 oz. Cachaca",
            "<.5 oz. Simple Syrup (1:1)",
            "Barspoon Fresh Lime",
            "3 lime wedges"
        ],
        directions: "Muddle then fill the tin with ice. Shake and dump. Serve with a straw.",
        image: "./images/caipirina.jpg"
    },
    {
        name: "Champagne Cocktail",
        ingredients: [
            "Sugar cube",
            "3 dashes Angostura bitters"
        ],
        directions: "place sugar cube in a cup with bitters. Top with chilled champagne. Garnish with a spiraled lemon twist.",
        image: "./images/champange-cocktail.jpg"
    },
    {
        name: "Chartreuse Swizzle",
        ingredients: [
            "1.25 oz. Green Chartreuse",
            ".5 oz. Falernum",
            "1 oz. Fresh Pineapple",
            ".75 oz. Fresh Lime"
        ],
        directions: "Build in a collins glass with crushed ice. Swizzle then add more crushed ice to just below the top of the glass. Hevily dash a layer of Angostura bitters. Agitate the bitters with a bar spoon to form a consistent layer. Top with fresh crushed ice up, over the rim of the glass. Garnish with grated nutmeg, mint sprig and a straw.",
        image: "./images/chartreuse-swizzle.jpg"
    },
    {
        name: "Chrysanthemum",
        ingredients: [
            "2 oz. Dry Vermouth",
            ".75 oz. Benedictine",
            ".25 oz. Absinthe"
        ],
        directions: "Short stir and strain over rocks. Garnish with an orange twist.",
        image: "./images/chrysanthemum.jpg"
    },
    {
        name: "Clover Club",
        ingredients: [
            "1.5 oz. London Dry Gin",
            ".5 oz. Dry Vermouth",
            ".5 oz. Fresh Lemon",
            ".5 oz. Simple Syrup (1:1)",
            "5 Raspberries",
            "1⁄2 an Egg White"
        ],
        directions: "Muddle the raspberries and shake. Then shake with ice and strain. Garnish with skewered raspberries and a lemon twist.",
        image: "./images/clover-club.jpg"
    },
    {
        name: "Corn 'n Oil",
        ingredients: [
            "2 oz. Blackstrap Rum",
            ".25 oz. Falernum",
            "3 Lime Wedges",
            "2 dashes Angostura Bitters"
        ],
        directions: "Muddle the lime. Hard shake with ice and dump into a double rocks glass.",
        image: "./images/corn-oil.jpg"
    },
    {
        name: "Daiquiri",
        ingredients: [
            "2 oz. White Rum",
            "<1 oz. Fresh Lime",
            ".75 oz. Simple Syrup (1:1)"
        ],
        directions: "Shake and strain.",
        image: "./images/daiquri.jpg"
    },
    {
        name: "Eastside",
        ingredients: [
            "2 oz. London Dry Gin",
            ".75 oz. Fresh Lemon",
            ".75 oz. Simple Syrup (1:1)",
            "Handful of fresh mint leaves, gently squeezed",
            "2 cucumber slices"
        ],
        directions: "Shake with 3 ice cubes. Strain into a large rocks glass with crushed ice. Garnish with a mint sprig and a cucumber slice.",
        image: "./images/eastside.jpg"
    },
    {
        name: "French 75",
        ingredients: [
            "1 oz. London Dry Gin",
            ".5 oz. Fresh Lemon",
            ".5 oz. Simple Syrup (1:1)"
        ],
        directions: "Shake and strain into a cup or champagne glass. Top wit champagne. Garnish with a lemon twist.",
        image: "./images/french-75.jpg"
    }, 
    {
        name: "Gimlet",
        ingredients: [
            "2 oz. London Dry Gin",
            "<1 oz. Fresh Lime",
            ">.5 oz. Simple Syrup (1:1)",
            "2 lime twists"
        ],
        directions: "Shake and strain over a rocks glass. Garnish with lime twists.",
        image: "./images/gimlet.jpg"
    },
    {
        name: "Gin Rickey",
        ingredients: [
            "1.5 oz. London Dry Gin",
            ".75 oz. Fresh Lime",
            ">.5 oz. Simple Syrup (1:1)"
        ],
        directions: "Shake and strain into a collins glass over ice. Add 1oz. club soda, and Garnish with a lime wedge.",
        image: "./images/gin-rickey.jpg"
    },
    {
        name: "Godfather/Godmother",
        ingredients: [
            "2 oz. Blended Scotch (J&B/Famous Grouse)",
            ".5 oz. DiSaronno"
        ],
        directions: "Stir in a rocks glass. If you are making a Godmother, substitute Vodka for the Scotch.",
        image: "./images/godfather.jpg"
    },
    {
        name: "Grasshopper",
        ingredients: [
            "1 oz. White Crème de Cacao",
            "1 oz. Green Crème de Menthe",
            "1 oz. Heavy Cream",
            "8 Mint Leaves"
        ],
        directions: "Shake and strain. Garnish with a mint leaf.",
        image: "./images/Grasshopper.jpg"
    },
    {
        name: "Hanky Panky",
        ingredients: [
            "1.5 oz. London Dry Gin",
            "1.5 oz. Italian Rosso Vermouth",
            ".25 oz. Fernet"
        ],
        directions: "Stir and strain. Garnish with a lemon twist.",
        image: "./images/hanky-panky.jpg"
    },
    {
        name: "Hemmingway Daiquiri",
        ingredients: [
            "2 oz. White Rum",
            ".75 oz. Fresh Lime",
            ".5 oz. Fresh Grapefruit",
            ".5 oz. Luxardo Maraschino Liqueur",
            ".25 oz. Cane Syrup (2:1)",
            "2 lime twists"
        ],
        directions: "Shake and strain. Garnish with a lime wheel.",
        image: "./images/hemmingway-daiquri.jpg"
    }
]

db.Drinks
  .remove({})
  .then(() => db.Drinks.collection.insertMany(drinkSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });