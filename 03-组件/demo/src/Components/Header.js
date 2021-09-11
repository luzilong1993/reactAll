import React from 'react';
import './Header.css'
import ReactTypes from 'prop-types';

function Header(props) {
    console.log(props);
    return (
        <div className={'header'}>我是头部</div>
    )
}

// 在子组件中定义数据默认值
Header.defaultProps = {
    name: 'six',
    age: 30
}

// 在子组件中校验参数类型
// 使用propTypes
Header.propTypes = {
    name: ReactTypes.string,
    age: ReactTypes.number
}

export default Header;