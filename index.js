const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || '8000';

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {
        data: 'sample data'
    });
});

app.get('/sassy', (req, res) => {
  res.render('sassy/sassy', {
    data: {
      greeting: 'hello there'
    }
  })
});

app.get('/test_index', (req, res) => {
    res.render('test_index', {
        data: 'sample data'
    });
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio', {})
})

app.get('/user', (req, res) => {
    res.render("user", {
        title: "Profile",
        userProfile: { nickname: "Naldo"}
    });
});