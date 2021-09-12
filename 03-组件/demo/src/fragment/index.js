import React from 'react';


class Home extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            heroList :['鲁班', '虞姬', '黄忠']
        }
    }

    render() {
        // 如果组件的结构比较复杂，只能有一个根元素
        return (
            <React.Fragment id={'home'}>
                <p>{this.state.heroList[0]}</p>
                <p>{this.state.heroList[1]}</p>
                <p>{this.state.heroList[2]}</p>
            </React.Fragment>
        )
    }
}

class App extends React.PureComponent {
    render() {
        return (
            <div id={'app'}>
                <Home />
            </div>
        );
    }
}

export default App;