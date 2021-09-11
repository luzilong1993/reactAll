import React from 'react';
import './Main.css'
import ReactTypes from 'prop-types';

class Main extends React.Component {
    constructor(props) {
        super(props)
        // this.props = props;
        
    }

    render() {
        console.log(this.props);
        return (
            <div className={'main'}>我是中间</div>
        )
    }

    // 定义默认的props属性
    static defaultProps = {
        name: 'six',
        age: 666
    }

    // 校验props类型
    static propTypes = {
        name: ReactTypes.string,
        age: ReactTypes.number
    }
}

// function Main() {
//     return (
//         <div className={'main'}>我是中间</div>
//     )
// }

export default Main;