const express = require('express');
const fs = require('fs');

const app = express();

const fsMemoryStats = '/proc/meminfo';

const pid = process.pid;
const env = process.env;

// Sample data
const books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' }
];

const memoryKeys = ['MemFree', 'MemAvailable'];

// Route to get all books
app.get('/api/stats', (req, res) => {

    response = {};
    try {
        memStatus = {};
        data = fs.readFileSync(fsMemoryStats, 'utf8');
        lines = data.split("\n");
        lines.forEach(line => {
            parts = line.split(":");

            index = memoryKeys.indexOf(parts[0]);
            if (index !== -1) {
                memStatus[parts[0]] = parseInt(parts[1].replace(/\s*/, '').slice(0,-2));
            }
        });

        

        response = {
            status: 'success',
            contents: memStatus,
            pid: pid,
            hostname: env.HOSTNAME
        }

        console.log(response);
    } catch (err) {
        response = {
            status: 'error',
            msg: err
        };
        console.error('Error reading file:', err);
    }
    
    res.json(response);
});

// Route to get all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// Route to get a specific book by ID
app.get('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    if (!book) {
        res.status(404).send('Book not found');
        return;
    }
    res.json(book);
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
