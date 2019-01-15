// JS for model (Backend interaction)
const orm = require('../config/orm.js');

// Methods to interact with DB
let burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(burgerName, cb) {
        orm.insertOne(burgerName, function(res) {
            cb(res);
        });
    },
    updateOne: function(eaten, burger_id, cb) {
        orm.updateOne(eaten, burger_id, function(res) {
            cb(res);
        });
    }
};

// Exporting the database interaction methods for use with the controller (burgers_controller.js)
module.exports = burger;