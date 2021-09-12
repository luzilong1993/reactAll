import React from 'react';
import Home from '../component/Home';
import About from '../component/About';
import Other from '../component/Other';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

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

                <BrowserRouter>
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/about'}>About</Link>


                    {/* 
                    
                     Switch：表示匹配到以后不在往后匹配
                    */}
                    <Switch>
                        <Route exact path={'/home'} component={Home} />
                        <Route exact path={'/about'} component={About} />
                        {/* 
                     如果route没有指定path那么表示这个route跟所有的资源地址匹配
                    */}
                        <Route component={Other} />
                    </Switch>

                </BrowserRouter>

            </div>
        );
    }
}

export default App;