const express = require("express");
const app = express();

app.get("/", function (req, res) {
	console.log("Request Received");
	res.send("Hello World");
});

app.listen(3000, () => {
	console.log("Server Started: http://localhost:3000");
});
