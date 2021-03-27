require("dotenv").config();

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const users = require("./models/users");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Authentication endpoints
router.post("/login", (req, res)=>{
	
});

router.post("/signup", (req, res)=>{

	//Validate the data.
		// Passwords are matching
		//Email is proper
		//Phone number
	//Insert the table.

	var newUser = new users({full_name:"Sai Kiran", email:"bsaikiran618@gmail.com",password_hash:"asasdasdasd", phone:"8790805406", karma:0});
	newUser.save()
	.then(savedDoc =>{
		console.log("Document saved!");
		res.send("yaAAYY CoooLLL")
	})
	.catch(err=>{
		console.log(err);
	})

});

module.exports = router;
