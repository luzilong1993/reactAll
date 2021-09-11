import React from "react";

class A extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <button onClick={() => { this.btnClick() }}>A按钮</button>
            </div>
        )
    }

    btnClick() {
        this.props.appFn('six')
    }
}

class B extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>{this.props.name}</div>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    render() {
        return (
            <div>
                <A appFn={this.myFun.bind(this)} />
                <B name={this.state.name} />
            </div>
        )
    }

    myFun(name) {
        console.log(name)
        this.setState({
            name: name
        })
    }
}

export default App