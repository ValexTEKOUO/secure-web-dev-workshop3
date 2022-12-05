const express = require('express')
const { default: mongoose } = require('mongoose')
const locationController = require('./locations/locations.controller')

const url='mongodb+srv://user2:IN7gL7CvJuXF20jP@cluster0.sdfh9dy.mongodb.net/test'
const app = express()
const port = 3000

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
	console.log('Connected...')
})

app.use(express.json())
app.use('/', locationController)

app.listen(port, () => {
	console.log(`API listening on port ${port}, visit http://localhost:${port}/`)
})

