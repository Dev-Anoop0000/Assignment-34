const exprees = require('express');
const app = (exprees());
const port = 3021;

app.get('/', (req, res) => {
    res.send(`<h2>Hello Papa</h2><h1>I am Home Page</h1>`)
});

app.get('/about', (req, res) => {
    res.send(`<h1>Hello Papa </h1><h1>I am your About Page</h1>`)
})

app.get('/contact', (req, res) => {
    res.send(`Please Contact by this Email : support@pwskills.com`);
})

app.listen(port, () => {
    console.log(`<h1>This server is running on Port : ${port}</h1>`)
});