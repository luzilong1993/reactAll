import React from 'react';
import Home from '../component/Home';
import About from '../component/About';
import Other from '../component/Other';
import User from '../component/User';
import Login from '../component/Login';
import Discover from '../component/Discover';
import { BrowserRouter, NavLink, Route, Switch, HashRouter, withRouter } from 'react-router-dom';

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

                <NavLink to={'/home'} activeStyle={{ color: 'red' }}>Home</NavLink>
                <NavLink to={'/about'} activeStyle={{ color: 'red' }}>About</NavLink>
                <NavLink to={'/user'} activeStyle={{ color: 'red' }}>User</NavLink>
                <NavLink to={'/discover'} activeStyle={{ color: 'red' }}>广场</NavLink>
                <button onClick={() => { this.btnClick() }}>广场</button>
                <Switch>
                    <Route exact path={'/home'} component={Home} />
                    <Route exact path={'/about'} component={About} />
                    <Route exact path={'/user'} component={User} />
                    <Route exact path={'/login'} component={Login} />
                    <Route path={'/discover'} component={Discover} />
                    {/* 
                        如果使用嵌套路由，外层路由不能添加精准匹配
                        */}
                    <Route component={Other} />
                </Switch>

            </div>
        );
    }

    btnClick() {
        // window.location.hash = '/discover'

        /* 
        
        TypeError: this.props.history is not a function
        如果一个组件通过路由创建的,那么系统自动给这个组件创建一个history对象
        如果不是通过路由创建的，那么系统就不会创建一个history对象


        如果想在非路由创建出来的组件中使用history对象，那么可以姐住withRouter高阶组件
        只要把一个组件传递给withRouter方法， 那么组件就由路由创建

        注意点，如果一个组件使用路由创建，那么必须使用BrowserRouter，HashRouter包裹起来
        */
        this.props.history('/discover')

        // 手动创建的组件没有history对象的
    }
}

export default withRouter(App);