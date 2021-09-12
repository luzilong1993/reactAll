import React from 'react';
// import './Home.css'
import HomeStyle from './Home.module.css'

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <p className={HomeStyle.title}>我是home段落</p>
                <a href={'http://www.baidu.com'} className={HomeStyle.link}>home超链接</a>
            </div>
         );
    }
}
 
export default Home