const express = require('express')
const app = express()
const server = require("http").createServer(app)
const io = require('socket.io')(server, { cors: { origin: "*" } })
const ejs = require("ejs")

var session = require('express-session');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.render('index', { session: req.session, popup: undefined })
})

app.get("*", (req, res) => res.render('errors/404'))
server.listen(5000, function() {
    console.log("Listening on port 5000")
})