import React from 'react';

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        // 第一种传递参数
        console.log(this.props.location.search);
    }
    render() { 
        return ( 
            <div>我是Home</div>
         );
    }
}
 
export default Home;