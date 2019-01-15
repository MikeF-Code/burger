// Controller for app
// Requires
const express = require("express");

const router = express.Router();

// Importing the model (burger.js) so we can utilize the db methods we set up in it.
const burger = require("../models/burger.js");

// Setup routes.
// GET all burgers.  `handlebarsObj` is what we'll be pushing to our Handlebars template to render the data to the end user.
router.get("/", function(req, res) {
    // selectAll() method was mapped in the route (burger.js).  The method runs the query defined in our ORM, and returns the query results as `data`.
    burger.selectAll(function(data) {
        // Putting the query results into the `burgers` key inside of our handlebars object.
        let handlebarsObj = {
            burgers: data
        };
        // Outputting the newly defined handlebars object to the console for debug purposes.
        console.log(handlebarsObj);
        // Use the render() method to send the handlebars object to the index.handlebars template.
        res.render("index", handlebarsObj);
    });
});

// POST a new burger.  
router.post("/api/burgers", function(req,res) {
    // insertOne() method from route.  Pulls the name of the burger as submitted in the client request.
    burger.insertOne(req.body.name, function(result) {
        // Send the results to the console for debug purposes.
        console.log(result);
        // POSTs the ID of the new burger as a JSON object.
        res.json({ id: result.insertId });
    });
});

// PUT to update whether a burger has been eaten yet or not.
router.put("/api/burgers/:id", function(req, res) {
    // Define the `burger_id` local variable as the ID value taken from the route's parameter `:id`.
    let burger_id = req.params.id;
    // Debug message to ensure correct ID is grabbed.
    console.log("ID of burger to be updated is " + burger_id);
    // updateOne() method from route.  Will flip the `eaten` boolean value for the burger with the ID pulled defined in `burger_id`.
    burger.updateOne({
        eaten: req.body.eaten
    }, burger_id, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }  
    });
});
