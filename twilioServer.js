const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const sendCustomerSMS = require('./send_sms');
const app = express();

//SMS sent to customer
app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  sendCustomerSMS("Your order has been received! It will be ready in 30 minutes", '+14038367275')
  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
