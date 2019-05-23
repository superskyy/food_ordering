const accountSid = 'AC7f7f0793e405974f3dae287cd8a7bcc0';
const authToken = 'ac6a819ea4bf4579b16a1ceb2ec701c3';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'The message has been sent from the customer LHL',
     from: '+15873156183',
     to: '+14034013494'
   })
  .then(message => console.log(message.sid));
