-- Active: 1700316808925@@127.0.0.1@5432@marcketdb

CREATE Table clientes(
    id SERIAL,
    nombre VARCHAR(40) NOT NULL,
    cedula VARCHAR(20) NOT NULL,
    direccion VARCHAR(20) NOT NULL,
    PRIMARY KEY(id)
)

INSERT INTO clientes (nombre, cedula, direccion) VALUES ('Roberto', '7799709', 'Santa Maria');

select * from clientes;

CREATE DATABASE marcketdb;

CREATE TABLE products(
    id SERIAL, 
    marck CHARACTER(45) NOT NULL,
    description CHARACTER(50) NOT NULL,
    price FLOAT NOT NULL,
    PRIMARY KEY(id)
);

drop table products;

insert into products(marck, description, price) VALUES('Apple', 'MacBook 20 pro', 2000.00)

select * from products