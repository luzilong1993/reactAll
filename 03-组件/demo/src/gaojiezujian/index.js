import React from 'react';
import { EventEmitter } from 'events';

// 高阶组件实例
/* class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}


function enhanceComponent(WrappedComponent){
    class AdvComponent extends React.PureComponent {
        render() {
            return(
                <div>
                    <WrappedComponent/>
                </div>
            )
        }
    }

    return AdvComponent;
}
const AdvComponent = enhanceComponent(Home); */


// 高阶组件应用-代码复用/增强props/抽离state/生命周期拦截


const UserContext = React.createContext({});
const { Provider, Consumer } = UserContext;
const eventBut = new EventEmitter();
/* class Father1 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Son1 />
            </div>
        );
    }
}

class Father2 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Son2 />
            </div>
        );
    }
}

class Son1 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Consumer>
                {
                    (value) => {
                        return (
                            <div>
                                <p>{value.name}</p>
                                <p>{value.age}</p>
                            </div>
                        )
                    }
                }
            </Consumer>
        );
    }
}

class Son2 extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Consumer>
                {
                    (value) => {
                        return (
                            <ul>
                                <li>{value.name}</li>
                                <li>{value.age}</li>
                            </ul>
                        )
                    }
                }
            </Consumer>
        );
    }
} */

class Son1 extends React.PureComponent {
    /* constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        eventBut.addListener('update', this.update.bind(this))
    }
    componentWillUnmount() {
        eventBut.removeListener('update', this.update.bind(this))
    }
    update(list) {
        this.setState({
            list
        })
    } */
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <p>{this.props.country}</p>
                {
                    this.props.list.map(name => {
                        return <p key={name}>{name}</p>
                    })
                }
            </div>
        )
    }
}

class Son2 extends React.PureComponent {
    /* constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        eventBut.addListener('update', this.update.bind(this))
    }
    componentWillUnmount() {
        eventBut.removeListener('update', this.update.bind(this))
    }
    update(list) {
        this.setState({
            list
        })
    } */
    render() {
        return (
            <ul>
                <li>{this.props.name}</li>
                <li>{this.props.age}</li>
                <li>{this.props.country}</li>
                {
                    this.props.list.map(name => {
                        return <li key={name}>{name}</li>
                    })
                }
            </ul>
        )
    }
}

function EnhancedComponent(WrappedComponent) {
    class Father extends React.PureComponent {
        constructor(props) {
            super(props);
            this.state = {
                list: []
            }
        }

        componentDidMount() {
            eventBut.addListener('update', this.update.bind(this))
        }
        componentWillUnmount() {
            eventBut.removeListener('update', this.update.bind(this))
        }
        update(list) {
            this.setState({
                list
            })
        }
        render() {
            return (
                <Consumer>
                    {
                        (value) => {
                            return (
                                // <WrappedComponent name={value.name} age={value.age} />
                                <WrappedComponent {...value} {...this.props} {...this.state} />
                            )
                        }
                    }
                </Consumer>
            )
        }
    }

    return Father;
}
const Father1 = EnhancedComponent(Son1);
const Father2 = EnhancedComponent(Son2);


class Info extends React.PureComponent {
    render() {
        return (
            <div>info</div>
        )
    }
}

class Login extends React.PureComponent {
    render() {
        return (
            <div>Login</div>
        )
    }
}

function EnhancedComponent1(WrappedComponent) {
    class Authority extends React.PureComponent {
        render() {
            if (this.props.isLogin) {
                return <Info />
            } else {
                return <Login />
            }
        }
    }
    return Authority
}

const AuthorityInfo = EnhancedComponent1(Info)

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {

    }
    render() {
        return (
            <Provider value={{ name: 'six', age: 18 }}>
                <Father1 country={'中国'} />
                <Father2 country={'俄罗斯'} />
                <button onClick={() => { this.btnClick() }}>按钮</button>
                <AuthorityInfo isLogin={true}/>
            </Provider>
        );
    }
    btnClick() {
        eventBut.emit('update', ['鲁班', '虞姬', '黄忠'])
    }
}

export default App;