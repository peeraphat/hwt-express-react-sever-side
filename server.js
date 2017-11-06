const express = require('express')
const app = express()
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const App = require('./App.jsx')

app.get('/', (req,res) => {
    var html = ReactDOMServer.renderToStaticMarkup(<App name="james"/>)
    res.send(html)  
})

app.listen('8080', () => {
    console.log('run on 8080')
}) 