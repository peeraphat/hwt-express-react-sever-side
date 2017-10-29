const express = require('express')
const app = express()
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const App = React.createFactory(require('./App.js'))

app.get('/', (req,res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    var html = ReactDOMServer.renderToStaticMarkup(React.createElement('body', null, App()))
    res.send(html)  
})

app.listen('8080', () => {
    console.log('run on 8080')
})