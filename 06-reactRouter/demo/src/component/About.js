import React from 'react';

class About extends React.PureComponent {
    constructor(props) {
        super(props);
        // 第二种传递参数
        console.log(this.props.match.params);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>我是About</div>
         );
    }
}
 
export default About;