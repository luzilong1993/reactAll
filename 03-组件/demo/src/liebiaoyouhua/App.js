import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            heroList:['鲁班','虞姬','黄忠']
        }
    }
    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.heroList.map(name=>{
                            return <li key={name}>{name}</li>
                        })
                    }
                </ul>
                <button onClick={() => {this.btnClick()}}>按钮</button>
            </div>
        )
    }
    btnClick(){
        this.setState({
            heroList:['阿珂',...this.state.heroList]
        })
    }
}

class App extends React.Component{
    render(){
        return(
            <Home/>
        )
    }
}

export default App