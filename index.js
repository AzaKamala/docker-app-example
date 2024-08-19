const express = require('express');
const db = require("./db/db.js");
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/hello', async (req, res) => {
    const message = await db("log").where({ id: 1 }).first();
    res.json(message);
});

app.listen(3000, () => {
    console.log(`Example app listening on http://localhost:3000`);
});