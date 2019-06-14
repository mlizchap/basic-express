const express = require('express')
const app = express()

var routes = require('./routes')

app.get('/', (req, res) => res.send('home'))

app.use('/users', routes.user);

const port = 8080;
app.listen(8080, () => console.log(`running on port ${port}`))