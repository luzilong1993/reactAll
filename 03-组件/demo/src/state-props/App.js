import React from 'react';

// props:只读
// state 可读可写

// setState是同步还是异步
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: 0
        }

        let oldObj = { name: 'six', age: 18 };
        let newObj = { age: 666 };

        let obj = Object.assign({}, oldObj, newObj);//setState通过浅拷贝复制
        console.log(obj);
    }
    render() {
        console.log('渲染界面');
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.state.age}</p>
                <button onClick={() => { this.btnClick() }}>按钮点击</button>
                {/* <button id={'btn'}>按钮</button> */}
            </div>
        )
    }

    componentDidMount() {
        // const oBtn = document.getElementById('btn');
        // oBtn.onclick = () => {
        //     this.setState({
        //         age: 999
        //     })

        //     console.log(this.state.age)
        // }
    }
    btnClick() {
        /* 
         1.setState在默认情况下是异步的
         主要是为了优化性能
 
         2.如何拿到更新后的数据
         setState可以接收两个参数
         通过setState方法的第二个参数，通过回调函数拿到
 
         3.setState一定是异步的吗？
         不一定：在定时器中，在原生事件中都不是异步的
        */
        /* this.setState({
            age:888
        },() => {
            console.log('回调函数',this.state.age)
        })
        
        console.log(this.state.age);// */

        /*  setTimeout(() => {
             this.setState({
                 age: 666
             });
             console.log(this.state.age)
         }, 0) */


        //  setState默认是一个异步的方法，默认会收集一段时间内的更新，然后再统一更新
        /* this.setState({
            age: this.state.age + 1
        })
        this.setState({
            age: this.state.age + 1
        })
        this.setState({
            age: this.state.age + 1
        }) */


        this.setState((preState,props) => {
            return {age:preState.age + 1}
        })
        this.setState((preState,props) => {
            return {age:preState.age + 1}
        })
        this.setState((preState,props) => {
            return {age:preState.age + 1}
        })
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Home name={'six'} />
            </div>
        )
    }
}

export default App;