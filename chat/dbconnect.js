const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

const url = process.env.DATABASE;

const connect = mongoose.connect(url, { useNewUrlParser: true });

module.exports = connect;
