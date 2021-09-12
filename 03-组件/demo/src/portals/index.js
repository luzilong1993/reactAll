import React from 'react';
import ReactDOM from 'react-dom';

// Portals 提供了一种将组件渲染到其它元素中的能力
class Modal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        /* 
            this.props.children可以获取当前组件所有的子元素或者子组件
            createPortal:接收两个参数  1.需要渲染的内容  2.需要渲染到什么地方
        */
        return ReactDOM.createPortal(this.props.children,document.getElementById('other'))
    }
}


class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id={'add'}>
                <Modal>
                    <div id={'modal'}>modal</div>
                </Modal>
            </div>
            
        );
    }
}

export default App;