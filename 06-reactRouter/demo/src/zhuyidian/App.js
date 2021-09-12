import React from 'react';
import Home from '../component/Home';
import About from '../component/About';
import { BrowserRouter, HashRouter, Link, Route, NavLink } from 'react-router-dom';

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            flag: true
        }
    }
    render() {
        return (
            <div>
                {/* 
                 1.BrowserRouter,HashRouter作用：
                 指定路由的监听模式history和hash两种模式
                */}
                <BrowserRouter>
                    {/* 
                     Link:用于修改url资源地址

                     Link和NavLink渲染出来都是a标签
                     如果想渲染其他的元素，可以通过手动路由跳转来实现
                    */}

                    <Link to={'/home'}>Home</Link>
                    <Link to={'/home/about'}>About</Link>

                    {/* 
                     NavLink注意点：在匹配路由的时候，是利用当前资源地址从左向右的和path中的i地址进行匹配的
                     只要当前资源地址从左至右完整的包含了path中的地址那么就认为匹配
                    */}

                    {/*  <NavLink to={'/home'} exact activeStyle={{ color: 'red' }}>Home</NavLink>
                    <NavLink to={'/home/about'} exact activeStyle={{ color: 'red' }}>About</NavLink> */}


                    {/* 
                     Route:用于维护url和组件的关系
                     是一个占位组件，将来根据匹配到的资源地址来渲染对应的组件

                     注意点：在匹配路由的时候，是利用当前资源地址从左向右的和path中的i地址进行匹配的
                     只要当前资源地址从左至右完整的包含了path中的地址那么就认为匹配
                    */}
                    <Route exact path={'/home'} component={Home} />
                    <Route exact path={'/home/about'} component={About} />
                </BrowserRouter>
                {/* <div>
                    <button onClick={() => { this.btnClick(true) }}>Home</button>
                    <button onClick={() => { this.btnClick(false) }}>About</button>
                </div>
                {this.state.flag ? <Home /> : <About />} */}
            </div>
        );
    }

    btnClick(flag) {
        this.setState({
            flag
        })
    }
}

export default App;