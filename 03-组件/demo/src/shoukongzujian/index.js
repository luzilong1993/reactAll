import React from 'react';


// 1.受控组件：值受到react控制的表单元素

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: 'six',
            email: '942146559@qq.com',
            phone: '13641043450'
        }
    }
    render() {
        return (
            <form>
                <input type="text" value={this.state.name} name={'name'} onChange={(e) => { this.change(e) }} />
                <input type="text" value={this.state.email} name={'email'} onChange={(e) => { this.change(e) }} />
                <input type="text" value={this.state.phone} name={'phone'} onChange={(e) => { this.change(e) }} />
            </form>
        );
    }
    /* change(e) {
        console.log(e.target.name);
        this.setState({
            name: e.target.value
        })
    }
    emailChange(e) {
        console.log(e.target.name);
        this.setState({
            email: e.target.value
        })
    }
    phoneChange(e) {
        console.log(e.target.name);
        this.setState({
            phone: e.target.value
        })
    } */

    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}

export default App;