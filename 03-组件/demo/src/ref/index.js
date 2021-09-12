import React from 'react';



class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>Home</div>
        );
    }
}


// function About() {
//     return (
//         <div>
//             <p>我是段落</p>
//             <p>我是span</p>
//         </div>
//     )
// }

// 拿到函数式组件中某一个元素使用forwardRef
const About = React.forwardRef((props, myRef) => {
    return (
        <div ref={myRef}>
            <p>我是段落</p>
            <p>我是span</p>
        </div>
    )
})
// 获取dom元素
// 1.通过id获取
class App extends React.PureComponent {
    constructor(props) {
        super(props);
        // this.oPRef = React.createRef();
        // this.oPRef = null

        this.myRef = React.createRef();
        this.state = {}
    }
    render() {
        return (
            <div>
                {/* <p id={'box'}>我是段落</p> */}
                {/* <p ref={'box'}>我是段落</p> */}
                {/* <p ref={this.oPRef}>我是段落</p> */}
                {/* <p ref={(arg) => { this.oPRef = arg }}>我是段落</p> */}

                {/* <p ref={this.myRef}>我是段落</p> */}
                <p>我是段落</p>
                {/* <Home ref={this.myRef}/> */}
                <Home />
                <About ref={this.myRef} />
                <button onClick={() => { this.btnClick() }}>App按钮</button>
            </div>
        );
    }

    btnClick() {
        // 1.通过id获取 传统方式（在react中及其不推荐）
        // let oP = document.getElementById('box');

        // 2.通过ref=‘字符串’  /this.refs.字符串(通过字符串的方式即将被废弃，也不推荐)
        // let oP = this.refs.box;
        // oP.innerHTML = 'aaa';

        // 3.通过createRef创建一个对象，然后将这个对象传递给ref（推荐）
        // let oP = this.oPRef.current;

        // 4.通过传递一个回调函数，并且保存回调函数参数的方式（推荐）
        // let oP = this.oPRef;

        // 如果获取的是原生的元素，那么拿到的就是元素本身
        // 如果获取的是类组件元素，那么拿到的就是类组件的实例对象
        // 如果获取的是函数组件元素，那么什么都拿不到
        console.log(this.myRef.current)
    }
}

export default App;