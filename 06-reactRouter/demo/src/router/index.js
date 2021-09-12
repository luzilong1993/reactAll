import Home from '../component/Home';
import About from '../component/About';
import Other from '../component/Other';
import User from '../component/User';
import Login from '../component/Login';
import Discover from '../component/Discover';
import { Hot, Toplist, Playlist } from '../component/Discover';

const routers = [
    {
        path: '/home',
        exact: true,
        component: Home
    },
    {
        path: '/about/:name/:age',
        exact: true,
        component: About
    }, {
        path: '/user',
        exact: true,
        component: User
    }, {
        path: '/login',
        exact: true,
        component: Login
    }, {
        path: '/discover',
        component: Discover,
        routers: [
            {
                path: '/discover',
                exact: true,
                component: Hot,
            }, {
                path: '/discover/toplist',
                exact: true,
                component: Toplist,
            },
            {
                path: '/discover/playlist',
                exact: true,
                component: Playlist,
            }
        ]
    }, {

        component: Other
    },
];

export default routers