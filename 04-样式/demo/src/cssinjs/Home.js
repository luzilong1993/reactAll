import React from 'react';
import styled from 'styled-components'

// styled-components特性--prop --attrs
const StyleDiv = styled.div`
    p{
        font-size:${props => props.theme.size};
        color:${props => props.theme.color};
    }
    a{
        font-size:25px;
        color:green;
    }
    
`

// 注意点，调用完attrs方法以后，返回的还是一个函数
// 所以我们还可以继续用模板字符串来调用
const StyleInput = styled.input.attrs({
    type: 'password'
})`


`

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        }
    }
    render() {
        return (
            <StyleDiv>
                <p>我是home段落</p>
                <a href={'http://www.baidu.com'}>home超链接</a>
                <button onClick={() => this.btnClick()}>按钮</button>
                {/* <StyleInput type={'password'}/> */}
                <StyleInput></StyleInput>
            </StyleDiv>
        );
    }
    btnClick() {
        this.setState({
            color: 'green'
        })
    }
}

export default Home