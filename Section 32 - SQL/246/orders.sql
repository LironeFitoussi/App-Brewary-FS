CREATE Table customers (
	id INT not NULL,
  	order_number INT,
  	customer_id INT,
  	product_id INT
  	PRIMARY key (id)
  	FOREIGN KEy (customer_id) REFERENCES customers(id),
  	FOREIGN KEy (customer_id) REFERENCES customers(id),
)