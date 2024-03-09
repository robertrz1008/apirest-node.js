-- Active: 1700335799467@@127.0.0.1@3300@marcketdb
create table products(
    id int AUTO_INCREMENT,
    mark VARCHAR(25) NOT null,
    description VARCHAR(25) not null,
    price DOUBLE not null,
    PRIMARY KEY(id)
)

insert into products(mark, description, price) VALUES("apple", "iphone 11", 250.00), ("apple", "iphone 12", 200.00), ("apple", "iphone 13", 400.00)