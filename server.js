"use strict";

require('dotenv').config();

const PORT              = process.env.PORT || 8080;
const ENV               = process.env.ENV || "development";
const express           = require("express");
const bodyParser        = require("body-parser");
const sass              = require("node-sass-middleware");
const app               = express();

const knexConfig        = require("./knexfile");
const knex              = require("knex")(knexConfig[ENV]);
const morgan            = require('morgan');
const knexLogger        = require('knex-logger');
const http              = require('http');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const sendSMS           = require('./send_sms');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");
let number;

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

//SMS sent to customer
app.post('/sms', (req, res) => {
  console.log("NUMBER", req.body)
  console.log('global', number)
  const twiml = new MessagingResponse();
  sendSMS("Your order has been received! It will be ready in 30 minutes", number)
  twiml.message('Test!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

//Order submitted to the owner - SMS
app.post("/order", (req, res) => {
  number = req.body.number;
  const order = req.body.order;

  // send a message to the owner
  sendSMS(`Order submitted - ${order}`, '14034013494')
  res.status(200).send();
})

http.createServer(app).listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

// sendSMS(
//   "Your order has been received! It will be ready in 30 minutes",
//   '+14034013494',
//   '15877071825'
// )
// app.listen(PORT, () => {
//   console.log("Example app listening on port " + PORT);
// });
