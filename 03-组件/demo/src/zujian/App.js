import React from 'react';
import './App.css'
import Header from '../Components/Header';
import Main from '../Components/Main';
import Footer from '../Components/Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                {/* <div className='header'>头部</div>
                <div className='main'>中间</div>
                <div className='footer'>底部</div> */}

                <Header name={'six'} age={18} />
                <Header />
                <Main name={'six'} age={19} />
                <Main />
                <Footer fatherFn={this.myFn.bind(this)} />

            </div>
        )
    }

    // 子传父
    myFn(name, age) {
        console.log(name, age)
    }
}
export default App
