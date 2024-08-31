const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

function sendSMS(message, to) {
  client.messages
    .create({
      body: message,
      from: process.env.TWILIO_SENDSMS_FROM_NUMBER,
      to: to,
    })
    .then((message) => console.log(message.sid));
}

module.exports = sendSMS;