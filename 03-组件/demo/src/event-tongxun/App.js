import React from 'react';
import { EventEmitter } from 'events';


// 1.创建一个全局的事件管理器对象

const eventBus = new EventEmitter();


class A extends React.Component {
    // componentDidMount是react是组件的生命周期方法
    componentDidMount() {
        eventBus.addListener('say', this.aFn.bind(this))
    }

    aFn(name, age) {
        console.log(name, age);
    }
    render() {
        return (
            <div>
                A
            </div>
        )
    }


}

class B extends React.Component {

    render() {
        return (
            <div>B
                <button onClick={() => { this.btnClick() }}></button>
            </div>
        )
    }

    btnClick() {
        eventBus.emit('say', 'six66', 18)
    }
}

class App extends React.Component {

    render() {
        return (
            <div>
                <A />
                <B />
            </div>
        )
    }


}

export default App