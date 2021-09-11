import React from 'react';
import './Footer.css'
class Footer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className={'footer'}>
                <p>我是底部</p>
                <button onClick={() => { this.btnClick() }}>子组件按钮</button>
            </div>
        )
    }

    btnClick() {
        console.log(this.props)
        this.props.fatherFn('six',18)
    }
}

// function Footer() {
//     return (
//         <div className={'footer'}>我是底部</div>
//     )
// }

export default Footer;