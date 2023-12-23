SELECT orders.order_number, products.name , products.price, products.stock
FROM orders
INNER JOIN products on orders.customer_id = products.id
