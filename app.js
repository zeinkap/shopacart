const express = require("express"),
      app = express(),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/shopacart", {useNewUrlParser: true});

app.use(bodyParser.urlEncoded({extended: true}));
app.set("view engine", ejs);

//schema setup
const shopacartSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Int16Array,
    description: String,
    image: String,
});

let Shopacart = mongoose.model("Shopacart", shopacartSchema);

//add item to shopacart database
Shopacart.create(
    {
        name: "Ninjago 7200 DPI Wireless Optical Mouse",
        category: "Electronics",
        price: 30,
        description: "Next-gen 12,000 DPI HERO optical sensor delivers unrivaled gaming performance, accuracy and power efficiency Advanced LIGHTSPEED wireless gaming mouse for super-fast 1 ms response time and faster than wired performance Ultra-long battery life gives you up to 250 hours of continuous gaming on a single AA battery.",
        image: "https://images-na.ssl-images-amazon.com/images/I/71weWdliAOL._SL1500_.jpg"
    }, (err, item) => {
        if(err) {
            console.log("Error!")
            console.log(err);
        } else {
            console.log("New item added!");
            console.log(item);
        }
});

app.get("/", (req, res) => {
    res.render("homepage");
});
