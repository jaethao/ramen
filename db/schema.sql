CREATE DATABASE ramen_db;
USE ramen_db;

CREATE TABLE ramens
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	slurped BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);