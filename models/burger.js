// JS for model (Backend interaction)
const orm = require('../config/orm.js');

// Methods to interact with DB
let burger = {
    selectAll: function(callback) {
        orm.all("burgers", function(res) {
            callback(res);
        });
    },
    insertOne: function(burgerName, callback) {
        orm.insertOne("burgers", burgerName, function(res) {
            callback(res);
        });
    },
    updateOne: function(eaten, burger_id, callback) {
        orm.updateOne("burgers", eaten, burger_id, function(res) {
            callback(res);
        });
    }
};

// Exporting the database interaction methods for use with the controller (burgers_controller.js)
module.exports = burger;