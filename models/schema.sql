DROP DATABASE IF EXISTS artistdb;

CREATE DATABASE artistdb;

USE artistdb;

CREATE TABLE `artists` (
	id INT NOT NULL AUTO_INCREMENT ,
    artist VARCHAR(100) NOT NULL,
    timecreated DATETIME NOT NULL,
    artistFacebook VARCHAR(100) NOT NULL,
    artistTwitter VARCHAR(100) NOT NULL,
    artistLinkedIn VARCHAR(100) NOT NULL,
    artistEmail VARCHAR(150) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE `customers` ( 
    id INT NOT NULL AUTO_INCREMENT,
    custName VARCHAR(120) NOT NULL,
    custEmail VARCHAR (120) NOT NULL,
    timecreated DATETIME NOT NULL,
    phone INT(10) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE `merch` ( 
    id INT NOT NULL AUTO_INCREMENT,
    merch VARCHAR (120) NOT NULL,
    size VARCHAR(10) NOT NULL,
    color VARCHAR(50) NOT NULL,
    artist VARCHAR(120) NOT NULL,
    designURL VARCHAR(150) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    timecreated DATETIME NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE `artistDesigns` (
    id INT NOT NULL AUTO_INCREMENT,
    designs VARCHAR(120) NOT NULL,
    designURL VARCHAR(150) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    timecreated DATETIME NOT NULL,
    PRIMARY KEY (id)
);