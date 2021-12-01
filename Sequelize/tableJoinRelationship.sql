CREATE TABLE    Customer (
    ID      int NOT NULL,
    name    varchar(50),
    location   varchar(50),
    PRIMARY KEY (ID)
    
);

CREATE TABLE    ProductOrders (
    ProductNumber  int NOT NULL,
    ProductDescription varchar(50),
    Cost int,
 	ID int,
  	PRIMARY KEY (ProductNumber),
 	FOREIGN KEY (ID) REFERENCES Customer(ID)
);

INSERT INTO Customer values(1,"Jayesh","Mumbai");
INSERT INTO Customer values(2,"Kunal","Pune");
INSERT INTO ProductOrders  values(1,"Watch",1000,2);ß
INSERT INTO ProductOrders values(2,"TV",30000,1);

SELECT  Customer.name, ProductOrders.ProductDescription
FROM Customer
INNER JOIN ProductOrders ON Customer.ID=ProductOrders.ID;