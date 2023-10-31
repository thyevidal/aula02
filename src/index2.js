import React from 'react';
import ReactDOM from 'react-dom/client';

class ClockClass extends React.Component {

    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return (<div><h1>Hora: {this.state.date.toLocaleTimeString()} </h1></div>)
    }

}

class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: false }
        //this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return <button onClick={() => this.handleClick()}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ClockClass />
)

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(
    <Toggle />
)