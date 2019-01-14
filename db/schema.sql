-- Create the database
CREATE DATABASE burgers_db;

-- Select the database
USE burgers_db;

-- Create a table called burgers
CREATE TABLE burgers
(
    id int AUTO_INCREMENT NOT NULL,
    burger_name varchar(100),
    devoured boolean,
    PRIMARY KEY (id)
);
