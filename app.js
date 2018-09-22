const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session')
const keys = require('./keys');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(flash()), app.use(session({
    secret: keys.session,
    resave: !1,
    saveUninitialized: !0
}))

const indexRoutes = require('./routes/index');
const galleryRoutes = require('./routes/gallery');

app.use(indexRoutes);
app.use(galleryRoutes);

app.listen(PORT, () => {
    console.log('The server is running');
});