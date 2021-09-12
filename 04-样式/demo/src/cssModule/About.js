import React from 'react';
import AboutStyle from './About.module.css'

class About extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <p className={AboutStyle.title}>我是about段落</p>
                <a href={'http://www.baidu.com'} className={AboutStyle.link}>about超链接</a>
            </div>
        );
    }
}

export default About