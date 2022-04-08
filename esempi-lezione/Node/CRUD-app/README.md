# express-api-starter

Query per creare la tabella sul DB

```sql
CREATE TABLE pizzas(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    flavour VARCHAR(200),
    description VARCHAR(800),
    price DOUBLE,
    createdAt DATE,
    updatedAt DATE
);
```