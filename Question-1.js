const http = require('http');

// Simple product data
const menProducts = [
    { id: 1, name: 'Product 1 (Men)', price: 10.99 },
    { id: 2, name: 'Product 2 (Men)', price: 101 },
    { id: 3, name: 'Product 3 (Men)', price: 1002 },
    { id: 4, name: 'Product 4 (Men)', price: 1025 },
    // Add more products here.....
];

const womenProducts = [
    { id: 1, name: 'Product 1 (women)', price: 1070 },
    { id: 2, name: 'Product 2 (women)', price: 1090 },
    { id: 3, name: 'Product 3 (women)', price: 1050 },
    { id: 4, name: 'Product 4 (women)', price: 1030 },
];

// Create an HTTP server;

const server = http.createServer((req, res) => {
    // Set response headers
    res.setHeader('Content-Type', 'application/json');

    // Hander different routes
    if (req.url === '/') {
        res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data ' }))
    } else if (req.url === '/men') {
        res.end(JSON.stringify({ products: menProducts }));
    } else if (req.url === '/women') {
        res.end(JSON.stringify({ products: womenProducts }));

    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Page not found' }));
    }
});

// Start the server on port 3000

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});