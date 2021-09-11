import React from 'react';


// 使用生产者消费者模式


/* // 1.创建一个上下文对象

const AppContext = React.createContext({});

// 2.从上下文对象中获取容器组件

// Provider:生产者容器组件，专门用于负责生产数据
// Consumer：消费者容器组件,专门用于消费生产者容器组件生产的数据的；
// 容器组件：专门用于包裹其他组件的容器，我们就称之为容器组件
const { Provider, Consumer } = AppContext;

class Son extends React.Component {
    render() {
        return (
            // 4.使用消费者消费数据
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
        )
    }
}

class Father extends React.Component {
    render() {
        return (
            <div>
                <Son />
            </div>
        )
    }
}


class App extends React.Component {
    render() {
        return (
            // 3.我们可以在生产者容器中通过value来生产数据
            <Provider value={{ name: 'six', age: 18 }}>
                <Father />
            </Provider>
        )
    }

} */



// 2.使用创建上下文时创建数据

/* const AppContext = React.createContext({
    name: 'six',
    age: 666
});

class Son extends React.Component {
    render() {
        return (
            <div>
                <p>{this.context.name}</p>
                <p>{this.context.age}</p>
            </div>
        )
    }
}

Son.contextType = AppContext;

class Father extends React.Component {
    render() {
        return (
            <div>
                <p>{this.context.name}</p>
                <p>{this.context.age}</p>
                <Son />
            </div>
        )
    }
}
Father.contextType = AppContext;


class App extends React.Component {
    render() {
        return (

            <div >
                <Father />
            </div>
        )
    }

} */


// 3。多个生产者，多个消费者

const AppContext = React.createContext({});
const AppContext1 = React.createContext({});



class Son extends React.Component {
    render() {
        return (
            <AppContext.Consumer>
                {
                    (value) => {
                        return (
                            <>
                                <AppContext1.Consumer>
                                    {
                                        (value2) => {
                                            return (
                                                <div>
                                                    <p>{value2.gender}</p>
                                                    <p>{value2.age}</p>
                                                </div>
                                            )
                                        }
                                    }
                                </AppContext1.Consumer>
                                <div>
                                    <p>{value.name}</p>
                                    <p>{value.age}</p>
                                </div>
                            </>
                        )
                    }
                }
            </AppContext.Consumer>
        )
    }
}



class Father extends React.Component {
    render() {
        return (
            <div>

                <Son />
            </div>
        )
    }
}



class App extends React.Component {
    render() {
        return (

            <AppContext.Provider value={{ name: 'six', age: 18 }} >
                <AppContext1.Provider value={{ gender: 'six66', age: 666 }}>
                    <Father />
                </AppContext1.Provider>

            </AppContext.Provider>
        )
    }

}




export default App