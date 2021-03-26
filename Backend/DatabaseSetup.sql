/* Creating the database */
CREATE DATABASE vikaradb;

/* Creating the user table */

CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	fullName varchar(50) NOT NULL,
	email varchar(50) NOT NULL,
	phone varchar(11) NOT NULL,
	pwdHash varchar(256) NOT NULL,
);
