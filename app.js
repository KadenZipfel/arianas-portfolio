const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

const indexRoutes = require('./routes/index');
const galleryRoutes = require('./routes/gallery');

app.use(indexRoutes);
app.use(galleryRoutes);

app.listen(PORT, () => {
    console.log('The server is running');
});