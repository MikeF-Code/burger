// *Requirements
const express = require("express");

// Use process.env.PORT to allow app to run on Heroku.  Use double pipe to allow app to run locally.
const PORT = process.env.PORT || 8080;

// Assign express method to 'app' so we can serve routes/handle diff request types/etc.
const app = express();

