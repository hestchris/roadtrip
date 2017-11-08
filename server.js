var express = require('express')

var app = express()

app.use(express.static(./public))

applget('/', function(request, response) {
	response.sendFile('./public/html/index.html', {root:'./'})
})

app.get('/denver', function(request, response) {
	response.sendFile('./public/html/denver.html', {root:'./'})
})

app.get('/redwood', function(request, response) {
	response.sendFile('./public/html/redwood.html', {root:'./'})
})

app.get('/seattle', function(request, response) {
	response.sendFile('./public/html/seattle.html', {root:'./'})
})

app.get('/glacierNationalPark', function(request, response) {
	response.sendFile('./public/html/glacierNationalPark.html', {root:'./'})
})

app.get('/detroit', function(request, response) {
	response.sendFile('./public/html/detroit.html', {root:'./'})
})

app.get('/washingtonDC', function(request, response) {
	response.sendFile('./public/html/washingtonDC.html', {root:'./'})
})

app.get('/Boston', function(request, response) {
	response.sendFile('./public/html/Boston.html', {root:'./'})
})



app.listen(3030, funtion() {
	console.log('The app is running on port 3030')
})