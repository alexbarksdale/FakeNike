const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
    res.render('pages/home.ejs');
});

app.get('/offwhite', function(req, res) {
    res.render('pages/offwhite.ejs');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log(`Capstone running on port: http://localhost:${PORT}`);
});
