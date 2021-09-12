import React from 'react';
import './Home.css'

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id={'home'}>
                <p>我是home段落</p>
                <a href={'http://www.baidu.com'}>home超链接</a>
            </div>
         );
    }
}
 
export default Home