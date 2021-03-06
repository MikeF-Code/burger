// *Requirements
const express = require("express");
const orm = require("./config/orm.js");
// Use process.env.PORT to allow app to run on Heroku.  Use double pipe to allow app to run locally.
const PORT = process.env.PORT || 8080;

// Assign express method to 'app' so we can serve routes/handle diff request types/etc.
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
// Log (server-side) when our server has started
console.log("Server listening on: http://localhost:" + PORT);
});