USE sneackerDB
/*��������������*/
CREATE TABLE admins
(
id INT PRIMARY KEY IDENTITY,
login VARCHAR(20) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL,
email VARCHAR(100) NULL UNIQUE,
name VARCHAR(50) NOT NULL,
surname VARCHAR (50) NULL,
registr_date DATETIME DEFAULT GETDATE(),
access_level INT DEFAULT 9 CHECK (access_level >= 0 AND access_level <= 9)
)

INSERT INTO admins VALUES 
('admin', '$2b$10$AHCXGsZqcbvBcp3Gx/3VVuKqaAyHeZy6LSXGkabYvbQMt4Ysz.joW', 'admin@gmail.com', '����', '���������', GETDATE(), 9)
SELECT * FROM admins

SELECT * FROM admins
                WHERE admins.email = 'admin@gmail.com' OR admins.login = 'adminw'


/*���� �����*/
CREATE TABLE label_types
(
id INT PRIMARY KEY IDENTITY,
type_name VARCHAR(20) NOT NULL UNIQUE
)

/*�����*/
CREATE TABLE labels
(
id INT PRIMARY KEY IDENTITY,
id_label_type INT FOREIGN KEY REFERENCES label_types(id),
name VARCHAR(20) NOT NULL UNIQUE
)

/*���������*/
CREATE TABLE categories
(
id INT PRIMARY KEY IDENTITY,
name VARCHAR(20) NOT NULL UNIQUE,
id_parent_category INT FOREIGN KEY REFERENCES categories(id),
)

/*������*/
CREATE TABLE brands
(
id INT PRIMARY KEY IDENTITY,
name VARCHAR(20) NOT NULL UNIQUE,
img_url VARCHAR(255) NULL
)

/*������*/
CREATE TABLE products
(
id INT PRIMARY KEY IDENTITY,
name VARCHAR(20) NOT NULL UNIQUE,
description TEXT,
product_code VARCHAR(10) NOT NULL
)

/*����� ������*/
CREATE TABLE product_labels
(
id INT PRIMARY KEY IDENTITY,
id_label INT FOREIGN KEY REFERENCES labels(id),
id_product INT FOREIGN KEY REFERENCES products(id),
)

/*��������� ������*/
CREATE TABLE product_categories
(
id INT PRIMARY KEY IDENTITY,
id_category INT FOREIGN KEY REFERENCES categories(id),
id_product INT FOREIGN KEY REFERENCES products(id),
)

/*�������������� ������*/
CREATE TABLE product_features
(
id INT PRIMARY KEY IDENTITY,
id_product INT FOREIGN KEY REFERENCES products(id),
id_brand INT FOREIGN KEY REFERENCES brands(id),
colors VARCHAR(100) NULL,
purpose VARCHAR(100) NULL,
country VARCHAR(20) NULL,
materials VARCHAR(100) NULL
)

/*���������� ������*/
CREATE TABLE product_images
(
id INT PRIMARY KEY IDENTITY,
id_product INT FOREIGN KEY REFERENCES products(id),
img_url VARCHAR(255) NULL,
img_order INT CHECK (img_order >= 1 AND img_order <= 20)
)

/*���� ������*/
CREATE TABLE product_types
(
id INT PRIMARY KEY IDENTITY,
id_product INT FOREIGN KEY REFERENCES products(id),
color VARCHAR(50),
size VARCHAR(5),
retail_price DECIMAL(10,2) CHECK (retail_price >= 0)
)

/*����������� ���� ������*/
CREATE TABLE product_types_images
(
id INT PRIMARY KEY IDENTITY,
id_product_type INT FOREIGN KEY REFERENCES product_types(id),
img_url VARCHAR(255) NULL,
img_types_order INT CHECK (img_types_order >= 1 AND img_types_order <= 20)
)

/*����������*/
CREATE TABLE provider
(
id INT PRIMARY KEY IDENTITY,
name_company VARCHAR(50),
contacts TEXT,
additional_information TEXT
)

/*�������� ������*/
CREATE TABLE product_delivery
(
id INT PRIMARY KEY IDENTITY,
id_product_type INT FOREIGN KEY REFERENCES product_types(id),
id_provider INT FOREIGN KEY REFERENCES provider(id),
purchase_price DECIMAL(10,2) CHECK (purchase_price >= 0),
date DATE NOT NULL DEFAULT GETDATE()
)

/*�������*/
CREATE TABLE clients
(
id INT PRIMARY KEY IDENTITY,
login VARCHAR(20) NOT NULL UNIQUE,
password VARCHAR(100) NOT NULL,
email VARCHAR(100) NULL,
name VARCHAR(50) NOT NULL,
surname VARCHAR (50) NULL,
registr_date DATETIMEOFFSET DEFAULT SYSDATETIMEOFFSET()
)

/*����� �������*/
CREATE TABLE client_address
(
id INT PRIMARY KEY IDENTITY,
id_client INT FOREIGN KEY REFERENCES clients(id),
country VARCHAR(50) NOT NULL,
region VARCHAR(50) NOT NULL,
city VARCHAR(50) NOT NULL,
area VARCHAR(50) NOT NULL,
house VARCHAR(50) NULL,
apartment VARCHAR(50) NULL,
postcode VARCHAR(10) NULL,
additional_information TEXT NULL
)

/*�����*/
CREATE TABLE client_order
(
id INT PRIMARY KEY IDENTITY,
id_client INT FOREIGN KEY REFERENCES clients(id),
id_client_address INT FOREIGN KEY REFERENCES client_address(id),
order_date DATETIMEOFFSET DEFAULT SYSDATETIMEOFFSET(),
order_status VARCHAR(50),
additional_information TEXT NULL
)

/*���������� ������*/
CREATE TABLE order_content
(
id INT PRIMARY KEY IDENTITY,
id_client_order INT FOREIGN KEY REFERENCES client_order(id),
id_product_type INT FOREIGN KEY REFERENCES product_types(id),
count INT DEFAULT 1 CHECK(count >= 1),
price DECIMAL(10,2)
)