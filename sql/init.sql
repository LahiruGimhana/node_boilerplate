-- Users table and procedures
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL  -- Added for login
);

DELIMITER //
CREATE PROCEDURE GetUserById(IN userId INT)
BEGIN
  SELECT * FROM users WHERE id = userId;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE CreateUser(IN username VARCHAR(255), IN email VARCHAR(255), IN password VARCHAR(255))
BEGIN
  INSERT INTO users (username, email, password) VALUES (username, email, password);
  SELECT LAST_INSERT_ID() as id;
END //
DELIMITER ;

-- Products table and procedure
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

DELIMITER //
CREATE PROCEDURE GetAllProducts()
BEGIN
  SELECT * FROM products;
END //
DELIMITER ;

-- Seed some initial data (optional)
INSERT INTO products (name, price) VALUES ('Laptop', 999.99), ('Phone', 499.99);