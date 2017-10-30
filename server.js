const express = require('express')
const app = express()
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const App = require('./App.jsx')
// const App = React.createFactory(require('./App.jsx'))


app.get('/', (req,res) => {
    // res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // var html = ReactDOMServer.renderToString(React.createElement(App))
    var html = ReactDOMServer.renderToStaticMarkup(<App name="james"/>)
    res.send(html)  
})

app.listen('8080', () => {
    console.log('run on 8080')
}) 