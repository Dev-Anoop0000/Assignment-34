const express = require('express');
const app = (express());
const port = 3039;

app.get('/random', (req, res) => {
    const random = Math.floor(Math.random() * 20);

    res.json({ random });

})

app.listen(port, () => {
    console.log(`This server is running on Port: ${port}`);
    const random = Math.floor(Math.random() * 200);

    console.log("Random: ", random);
});