import React from 'react';
import { Redirect } from 'react-router-dom'

class User extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: true
        }
        console.log(this.props.location.state);
    }
    render() {
        let user = (
            <div>
                <h1>用户界面</h1>
                <p>用户名:ddd</p>
                <p>密码:aaa</p>
            </div>
        )

        let login = (
            <Redirect to={'/login'} />
        )
        return this.state.isLogin ? user : login;
    }
}

export default User;