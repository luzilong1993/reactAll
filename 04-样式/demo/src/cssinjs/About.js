import React from 'react';


class About extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <p>我是about段落</p>
                <a href={'http://www.baidu.com'} >about超链接</a>
            </div>
        );
    }
}

export default About