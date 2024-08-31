const express = require("express");
const app = express();

app.get("/api/path", function (req, res) {
	console.log("Request Accepted");
	res.send("Hello World");
});

app.listen(3000, () => {
	console.log("Server Started: http://localhost:3000");
});
