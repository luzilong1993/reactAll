import React from 'react';
import Home from './Home';
import About from './About';
import styled, { ThemeProvider } from 'styled-components'

// 继承
/* const StyleDiv1 = styled.div`
font-size:100px;
color:red;
background:blue;
`
const StyleDiv2 = styled.div`
font-size:100px;
color:green;
background:blue;
` */

const BaseDiv = styled.div`
font-size:100px;
background:blue;
`
const StyleDiv1 = styled(BaseDiv)`
color:red
`

const StyleDiv2 = styled(BaseDiv)`
color:green
`


class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                {/* 主题 */}
                <ThemeProvider theme={{ size: '100px', color: 'red' }}>
                    <Home />
                    <About />
                </ThemeProvider>

                <StyleDiv1>我是div1</StyleDiv1>
                <StyleDiv2>我是div2</StyleDiv2>
            </div>
        );
    }
}

export default App;