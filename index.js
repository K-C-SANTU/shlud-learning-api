const express = require("express");

require('dotenv').config()
// const sendSMS = require("./services/sms.service");
const dbConnect = require("./database/connection");
const { getUsers } = require("./CRUD/userCrud");
const routes = require("./Routes");
dbConnect()
const app = express();
app.use(express.json());

// app.get("/api/path", function (req, res) {
//   sendSMS("hello santu", "+917026036446");
//   console.log("Request Accepted");
//   res.send("Hello World");
// });

app.use('/api', routes);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server Started: http://localhost:${port}`);
});
