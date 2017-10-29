const React = require('react')
const createReactClass = require('create-react-class')

module.exports = createReactClass({
    render: function() {
        return React.createElement('div', null, 'Hello World')
      }
})