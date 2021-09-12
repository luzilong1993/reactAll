import React from 'react';


class Home extends React.Component {
    constructor(props) {
        super(props)
        console.log('挂载时-创建组件');
        this.state = {
            count: 0
        }
    }
    static getDerivedStateFromProps(props, state) {
        // 将props中数据映射到state中
        console.log('挂载或更新时-映射数据');
        console.log(props, state);
        // return null；
        // return {
        //     gender:'man'
        // }
        return props;
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('更新时-决定是否更新UI');
        return true;
        // return false;
    }
    render() {
        if (this.state.count === 0) {
            console.log('挂载时-渲染组件')
        } else {
            console.log('更新时-渲染完成');
        }

        return (
            <div>
                <p>Home</p>
                <p>{this.state.count}</p>
                <p>{this.state.gender}</p>
                <p>{this.state.name}</p>
                <button onClick={() => { this.btnClick() }}>按钮</button>
            </div>
        )
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('更新时-最后获取到更新之前数据的地方');
        console.log(prevProps, prevState);
        return null;
    }
    componentDidMount() {
        console.log('挂载时-渲染完成');
    }
    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log('更新时-渲染完成');
    }
    componentWillUnmount() {
        console.log('卸载时-即将被卸载')
    }

    btnClick() {
        this.setState({
            count: 1
        })
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: true
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.flag && <Home name={'小六'} />
                }
                <button onClick={() => { this.btnClick() }}>按钮</button>
            </div>


        )
    }

    btnClick() {
        this.setState({
            flag: !this.state.flag
        })
    }
}

export default App