const React = require('react')

class App extends React.Component {
    render () {
        return (
            <div>
                Hello World {this.props.name}
            </div>
        )
    }
}
module.exports = App