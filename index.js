const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || '8000';

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home' })
});

app.get('/home', (req, res) => {
    const test = 'test from index.js';
    res.render('converted_from_html_lifeonreg_index', {
        test
    })
});

app.get('/user', (req, res) => {
    res.render("user", {
        title: "Profile",
        userProfile: { nickname: "Naldo"}
    });
});