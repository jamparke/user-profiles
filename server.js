const express = require('express') // most commonly ued app in node.js. Give the server a framework to make communicating more easy 
const bodyParser = require('body-parser') // great tool, takes what ever your sending and  sends them as strings.
const cors = require('cors')
const session = require('express-session')
const config = require('./config.js')
const	userCtrl = require('./controllers/userCtrl.js')
const	profileCtrl = require('./controllers/profileCtrl.js')
const	port = 3000

// app declaration
const app = express() // this creates the app similar to angular.js angular.module

// controllers- to modulize

// middleware
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use(session({ secret: config.sessionSecret }))
// endpoints - contorlled points of info that can be acced on a server 

// listen function
app.listen(3000, function () {
  console.log('Listening on port 3000')
})

// CORS whitelisting our server for connections
var corsOptions = {
  origin: 'http://localhost:3000'
}

// endpoints
app.post('/api/login', userCtrl.login)
app.get('/api/profiles', profileCtrl.getFriends)
