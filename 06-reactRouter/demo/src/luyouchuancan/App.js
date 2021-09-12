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
        let obj = {
            name: 'six',
            age: 18,
            gender: 'man'
        }
        return (
            <div>

                <NavLink to={'/home?name=six&age=18'} activeStyle={{ color: 'red' }}>Home</NavLink>
                <NavLink to={'/about/six/18'} activeStyle={{ color: 'red' }}>About</NavLink>
                <NavLink to={{
                    pathname: '/user',
                    search: '',
                    hash: '',
                    state: obj
                }} activeStyle={{ color: 'red' }}>User</NavLink>
                <NavLink to={'/discover'} activeStyle={{ color: 'red' }}>广场</NavLink>
                <Switch>
                    <Route exact path={'/home'} component={Home} />
                    <Route exact path={'/about/:name/:age'} component={About} />
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

    }
}

export default withRouter(App);