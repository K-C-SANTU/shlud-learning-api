const express = require("express");
require('dotenv').config()
const sendSMS = require("./services/sms.service");
const app = express();

app.get("/api/path", function (req, res) {
  sendSMS("hello santu", "+917026036446");
  console.log("Request Accepted");
  res.send("Hello World");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server Started: http://localhost:${port}`);
});
