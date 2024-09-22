const mongoose = require("mongoose");
const URL = process.env.DB_URL

async function dbConnect() {
    mongoose.connect(URL).then(()=>{
        console.log("Database Connected");
    })
}
module.exports = dbConnect;