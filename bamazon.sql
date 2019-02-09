DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE PRODUCTS
(

  Item_ID INTEGER(10)
  AUTO_INCREMENT NOT NULL,

  Product_Name VARCHAR
  (30) NOT NULL,
  Department_Name VARCHAR
  (30) NOT NULL,
  Price INTEGER
  (10),
  Stock_Quantity INTEGER
  (10),
  PRIMARY KEY
  (Item_ID)
);


  INSERT INTO PRODUCTS
    (Product_Name,Department_Name,Price,Stock_Quantity)
  VALUES
    ("Laser Jet Printer", "Office Supplies", 100, 10);

  INSERT INTO PRODUCTS
    (Product_Name,Department_Name,Price,Stock_Quantity)
  VALUES
    ("Coffee", "Household Items", 5.50, 10);

  INSERT INTO PRODUCTS
    (Product_Name,Department_Name,Price,Stock_Quantity)
  VALUES
    ("Shirts", "Mens Apparel", 25, 35);

  INSERT INTO PRODUCTS
    (Product_Name,Department_Name,Price,Stock_Quantity)
  VALUES
    ("Muscle Milk", "Sports and Nutrition", 12, 25);

  INSERT INTO PRODUCTS
    (Product_Name,Department_Name,Price,Stock_Quantity)
  VALUES
    ("Runnin Shoes", "Athletic ware", 50, 75);

  INSERT INTO PRODUCTS
    (Product_Name,Department_Name,Price,Stock_Quantity)
  VALUES
    ("Perfect Bar", "Snacks and Food", 3.50, 1000);

  INSERT INTO PRODUCTS
    (Product_Name,Department_Name,Price,Stock_Quantity)
  VALUES
    ("Cargo Mat", "Automotive Accessories", 29, 55);

  INSERT INTO PRODUCTS
    (Product_Name,Department_Name,Price,Stock_Quantity)
  VALUES
    ("Skyfall", "Movies", 4.50, 100);

  INSERT INTO PRODUCTS
    (Product_Name,Department_Name,Price,Stock_Quantity)
  VALUES
    ("Body Lotion", "Health & Beauty", 2.50, 10);

  INSERT INTO PRODUCTS
    (Product_Name,Department_Name,Price,Stock_Quantity)
  VALUES
    ("Swimming Goggles", "Athletic ware", 25, 150);

  SELECT *
  FROM PRODUCTS;
