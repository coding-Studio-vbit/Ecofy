const express = require("express");
const router = express.Router();
const {Client} = require("pg");
const dbObject = require("./databaseObject.js");
//Authentication endpoints

router.post("/login", (req, res)=>{

	const client = new Client(dbObject);
	client.connect();

	client.query("SELECT NOW()")
	.then((res)=>{
		console.log(res);
		client.end();
	})
	.catch(error=>{
		console.log(error);
		client.end()
	})

});

router.post("/signup", (req, res)=>{

	//Validate the data.
		// Passwords are matching
		//Email is proper
		//Phone number
	//Insert the table.

});

module.exports = router;
