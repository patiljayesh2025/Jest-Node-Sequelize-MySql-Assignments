use mysqlassignment;
create table Product ( ProductID int, ProductName varchar(50), Description varchar(50), cost int);


insert into product values (1, 'Whirlpool-Freez', 'Refrigerator',54000);
insert into product values (2, 'LG-TV', 'TV',40000);
insert into product values (3, 'Apple', 'Watch',20000);
insert into product values (4, 'Mobile', 'Viovo',10000);
insert into product values (5, 'Nikon', 'Nikon Camera',67000);
insert into product values (6, 'Usha-Fan', 'Fan',20000);
select * from product;

create table Customer ( CustomerID int, CustomerName varchar(30), Address varchar(100), City varchar(20), PostalCode int,country varchar(30));


insert into Customer values (1, 'Jayesh', 'Pune', 'Pune',425412, 'India');
insert into Customer values (2, 'Ramesh', 'Mumbai', 'Mumbai',425405, 'India');
insert into Customer values (3, 'Rajesh', 'Nagpur', 'Nagpur',412425, 'Ihdia');
insert into Customer values (4, 'Rajnish', 'Banglore', 'Banglore',425405, 'India');
insert into Customer values (5, 'Biden', 'Janta Nagar', 'NewYork', 403322, 'India);
select *  from Customer;


create table Purchase ( CustomerID int, ProductID int);
insert into Purchase values (1, 1);
insert into Purchase values (2, 3);
insert into Purchase values (3, 2);
insert into Purchase values (4, 5);
insert into Purchase values (5,4);

select * from purchase;

select distinct city from customer;

select distinct City, Count (city) as `cities` from customer  group by city;
select * from product where cost>=15000;

select CustomerID, CustomerName, city from customer where CustomerID in (select CustomerID from purchase);

select * from Product where ProductID in (select productid from purchase);

select customername from customer order by customername asc;

select customername, country from customer order by customername asc, country desc;

insert into customer(CustomerID, CustomerName, Address, City, Country) values (8, 'Ram', 'Patil', 'Nashik','India');


select * from customer where postalcode is null;

select * from customer where postalcode is not null;


update product set productname='Vivo-mobile' where productname='mobile';

update product set description='mobile' where productname='Vivo-mobile';

update product set description='Latest Smartphones' where productId=106 and productname='Vivo-mobile';

delete from customer where customerid=205;

truncate table customer;

select productid, productname, cost from product where cost=(select max(cost) from product);


select productid, productname, cost from product order by cost desc limit 0,1;

select productid, productname from product order by cost limit 0,1;


select sum((select cost from product p where p.productid=temp.productid)*temp.product_count)
from (select productid, count(productid) as product_count from purchase group by productid) as temp;


alter table customer RENAME COLUMN postalcode to pincode ;


alter table customer add rating int AFTER pincode ;

create table student (id int, name varchar(50), marks int);

insert into student values(1, 'Varun',90);
insert into student values(2, "Tanmay", 76);


truncate table student;

drop table student;

select * from Customer;

set autocommit=0;
delete from customer where customerid=206;
rollback;
commit;


set autocommit=1;

select customerid, count (ProductID) as Total from purchase group by CustomerID;


select c.customerid, c.customername,p.productname,p.cost from customer c , product p,purchase pu where c.customerid=pu.purchaseId;

