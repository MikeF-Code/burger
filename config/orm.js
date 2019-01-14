// Import the MySQL connection info.
const connection = require("./connection.js");

// Setup the ORM.
// An ORM is an object, so we will be creating methods stored inside the object that we can reference later (ex. orm.selectAll()).  These methods contain SQL queries with sanitized inputs to prevent injection.
let orm = {
    selectAll: function() {
        // Setup query string.
        let query = 'SELECT * FROM burgers';
        // Use query() method of `connection` to run the query string against the DB, and return the results in a callback.
        connection.query(query, function(err, result) {
            // Error handling
            if (err) throw err;
            // Do something with results.
            console.log(result);
        });
    },
    insertOne: function(burgerName) {
        // Setup query string.
        let query = 'INSERT INTO burgers (burger_name, devoured) VALUES (?, false)';
        // Run query() method.
        connection.query(query, burgerName, function(err, result) {
            // Error handling
            if (err) throw err;
            // Do something with results.
            console.log(result);
        });
    },
    updateOne: function(eaten, burger_id) {
        // Setup query string.
        let query = 'UPDATE burgers SET ';
        query += objToSql(eaten);
        query += ' WHERE ';
        query += burger_id;

        console.log(query);
        // Run query() method.
        connection.query(query, function(err, result) {
            // Error handling
            if (err) throw err;
            // Do something with results
            console.log(result);
        });
    }
};

// Exporting the ORM object for the model burger.js
module.exports = orm;