import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import routers from '../router';

export function Hot() {
    return (
        <div>推荐</div>
    )
}
export function Toplist() {
    return (
        <div>排行榜</div>
    )
}

export function Playlist() {
    return (
        <div>歌单</div>
    )
}

class Discover extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            /* 
             由于当前组件在browerrouter或者hashrouter
             所以在当前组件中不用使用包裹
            */
            <div>
                <NavLink exact to={'/discover'} activeStyle={{ color: 'red' }}>推荐</NavLink>
                <NavLink exact to={'/discover/toplist'} activeStyle={{ color: 'red' }}>排行榜</NavLink>
                <NavLink exact to={'/discover/playlist'} activeStyle={{ color: 'red' }}>歌单</NavLink>
                <button onClick={() => { this.btnClick() }}>歌单</button>
                {/* <Switch>
                    <Route exact path={'/discover'} component={Hot} />
                    <Route exact path={'/discover/toplist'} component={Toplist} />
                    <Route exact path={'/discover/playlist'} component={Playlist} />

                </Switch> */}
                {renderRoutes(routers[4].routers)}
            </div>
        );
    }

    btnClick() {
        // 如果是hash模式，可以通过js设置hash值即可
        // window.location.hash = '/discover/playlist'

        // 如果一个组件是通过路由创建出来的，那么系统就会自动创建一个history对象
        this.props.history.push('/discover/playlist')
    }
}

export default Discover;