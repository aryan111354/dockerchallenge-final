CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author VARCHAR(255) NOT NULL
);

-- Inserting a book with id 1, title "To Kill a Mockingbird", and author "Harper Lee"
INSERT INTO books (id, title, author) VALUES (1, 'To Kill a Mockingbird', 'Harper Lee');

-- Inserting a book with id 2, title "1984", and author "George Orwell"
INSERT INTO books (id, title, author) VALUES (2, '1984', 'George Orwell');

-- Inserting a book with id 3, title "Pride and Prejudice", and author "Jane Austen"
INSERT INTO books (id, title, author) VALUES (3, 'Pride and Prejudice', 'Jane Austen');

-- Inserting a book with id 4, title "The Great Gatsby", and author "F. Scott Fitzgerald"
INSERT INTO books (id, title, author) VALUES (4, 'The Great Gatsby', 'F. Scott Fitzgerald');

