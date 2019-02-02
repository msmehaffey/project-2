DROP DATABASE IF EXISTS artistdb;

CREATE DATABASE artistdb;

USE artistdb;

CREATE TABLE `designs` (
	id INT NOT NULL AUTO_INCREMENT ,
    artist VARCHAR(100) NOT NULL,
    design VARCHAR(120) NOT NULL,
    timecreated DATETIME NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE `customers` ( 
    id INT NOT NULL AUTO_INCREMENT,
    custName VARCHAR(120) NOT NULL,
    custEmail VARCHAR (120) NOT NULL,
    timecreated DATETIME NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE `merch` ( 
    id INT NOT NULL AUTO_INCREMENT,
    merch VARCHAR (120) NOT NULL,
    size VARCHAR(10) NOT NULL,
    color VARCHAR(50) NOT NULL,
    artist VARCHAR(120) NOT NULL,
    designURL VARCHAR(150) NOT NULL,
    price INT(10,2) NOT NULL,
    PRIMARY KEY (id)
);