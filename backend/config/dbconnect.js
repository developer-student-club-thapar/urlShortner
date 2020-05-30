const mongoose =require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const HttpError = require("../models/http-error");

const connectDB = async () => {
try{
    await mongoose.connect(db,{
       useUnifiedTopology: true, useNewUrlParser: true
    });
} catch (err) {
		const error = new HttpError(
			"Couldn't connect to database. Try again later.",
			500
		);
		return next(error);
	}
}
 module.exports = connectDB;