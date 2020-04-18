const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || '8000';

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

app.get('/', (req, res) => {
    res.status(200).send('Successful get at /');
});