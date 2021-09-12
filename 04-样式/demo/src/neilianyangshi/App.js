import React from 'react';


class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            color:'red'
         }
    }
    render() { 
        return ( 
            <div>
                <p style={{fontSize:'50px',color:this.state.color}}>我是段落1</p>
                <p style={{fontSize:'50px',color:'green'}}>我是段落2</p>
                <button onClick={() => {this.btnClick()}}>按钮</button>
            </div>
         );
    }

    btnClick(){
        this.setState({
            color:'blue'
        })
    }
}
 
export default App;