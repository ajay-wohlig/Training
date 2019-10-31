const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

//setup path for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views loaction
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath)) 

app.get('',(req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Ajay'
        
    })
})

app.get('/about',(req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Ajay'
    })
})

app.get('/help',(req, res) => {
    res.render('help', {
        title: "Help",
        msg: 'Some help message',
        name: 'Ajay'
    })
})

app.get('/weather',(req,res) => {
    res.send({
        forecast: 'Clear throughout day',
        location: 'India'       
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Help article not found',
        name: "Ajay"
    })
})

app.get('*',(req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found',
        name: "Ajay"
    })
})

app.listen(3001,() => {
    console.log('Server has started has successfully')
})