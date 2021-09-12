import React from 'react';

// 借用shouldComponentUpdate，实现性能优化
/* class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 18
        }
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.age !== nextState.age) {
            return true;
        }
        return false;

    }
    render() {
        console.log('home-render调用')
        return (
            <div>
                <p>{this.state.age}</p>
            </div>
        );
    }
} */


// 让组件继承于PureComponent，让react自动帮我们实现
/* class Home extends React.PureComponent { 
    constructor(props) {
        super(props);
        this.state = {
            age: 18
        }
    }
    render() {
        console.log('home-render调用')
        return (
            <div>
                <p>{this.state.age}</p>
            </div>
        );
    }
} */

// 函数式组件性能优化
// 通过react.memo()高阶函数
// react.memo()会返回一个优化后的组件给我们
/* function Home() {
    console.log('Home-render被调用')
    return (
        <div>
            <p>Home</p>
        </div>
    )
} */

const PurHome = React.memo(function () {
    console.log('PurHome-render被调用')
    return (
        <div>
            <p>Home</p>
        </div>
    )
})


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'six',
            age: 18
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.age !== nextState.age) {
            return true;
        }
        return false;
    }
    render() {
        console.log('App-render调用')
        return (
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
                {/* <Home /> */}
                <PurHome />
                <button onClick={() => { this.btnClick() }}>按钮</button>
            </div>
        );
    }

    btnClick() {
        this.setState({
            name: '小六',
            age: this.state.age + 1
        })
    }
}

export default App;