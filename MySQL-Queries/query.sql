show databases;

create database dj;
create database test;
show databases;
drop database test;
show databases;

-- use specific database and start creating hte tables
use dj;

create table Contact(
    id int,
    Name varchar(20)
)