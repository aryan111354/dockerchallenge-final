const express = require('express');
const fs = require('fs');
const mysql = require('mysql');

const app = express();

const fsMemoryStats = '/proc/meminfo';

const pid = process.pid;
const env = process.env;

globalThis.globalStatsCounter = 0


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
            hostname: env.HOSTNAME,
            counter: globalThis.globalStatsCounter
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



// Create a connection to the MySQL database
const pool = mysql.createPool({
    host: env.DB_HOST, 
    user: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE
});


// Route to get all books
app.get('/api/books', (req, res) => {    
    
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database: ' + err.stack);
            return res.status(500).json({ error: 'Database error' });
        }

        // Query the database
        connection.query('SELECT * FROM books', (error, results, fields) => {
            // Release the connection back to the pool
            connection.release();

            if (error) {
                console.error('Error querying database: ' + error.stack);
                return res.status(500).json({ error: 'Database error' });
            }

            // Send the list of books as JSON response
            res.json(results);
        });
    });


    
});

// Route to get a specific book by ID
app.get('/api/books/:id', (req, res) => {
    globalThis.globalStatsCounter = globalThis.globalStatsCounter + 1;
    const bookId = parseInt(req.params.id);


    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database: ' + err.stack);
            return res.status(500).json({ error: 'Database error' });
        }

        // Query the database
        connection.query('SELECT * FROM books WHERE id = ?', [bookId], (error, results, fields) => {
            // Release the connection back to the pool
            connection.release();

            if (error) {
                console.error('Error querying database: ' + error.stack);
                return res.status(500).json({ error: 'Database error' });
            }

            if (results.length === 0) {
                return res.status(404).json({ error: 'Book not found' });
            }

            // Send the book as JSON response
            res.json(results[0]);
        });
    });

});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
