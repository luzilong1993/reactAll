import React from 'react';
import Home from './Home';
import About from './About';

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Home/>
                <About/>
            </div>
         );
    }
}
 
export default App