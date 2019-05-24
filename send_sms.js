const accountSid = 'AC7f7f0793e405974f3dae287cd8a7bcc0';
const authToken = 'ac6a819ea4bf4579b16a1ceb2ec701c3';
const client = require('twilio')(accountSid, authToken);

module.exports = (msg, number) => {
  client.messages
    .create({
       body: msg,
       from: '+15873156183',
       to: number
     })
    .then(message => console.log(message));
}
