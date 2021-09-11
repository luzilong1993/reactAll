import React from 'react';
import { EventEmitter } from 'events';
const eventBus = new EventEmitter();

class Son extends React.Component {
    render() {
        return (
            <div>
                <button onClick={() => { this.btnClick() }}>儿子点击</button>
            </div>
        )
    }
    btnClick() {
        eventBus.emit('say', 'six12', '1333')
    }
}



class Father extends React.Component {
    render() {
        return (
            <div>

                <Son />
            </div>
        )
    }
}



class App extends React.Component {

    componentDidMount() {
        eventBus.addListener('say', this.appFn.bind(this))
    }
    render() {
        return (

            <div>
                <Father />
            </div>
        )
    }
    appFn(name, age) {
        console.log(name, age);
    }

}

export default App