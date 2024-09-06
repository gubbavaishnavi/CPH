const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/CPH";

const mongoDB = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true })
        .then(() => {
            console.log("Connected Successfully");
        })
        .catch(err => {
            console.error("Connection error:", err);
        });
};

module.exports = mongoDB;
