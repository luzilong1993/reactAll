import React from 'react';
import ReactDOM from 'react-dom';
// import App from './zhuyidian/App';
// import App from './switch/App';
// import App from './redirect/App';
// import App from './qiaotaoluyou/App';
// import App from './shoudongtiaozhuan/App';
// import App from './luyouchuancan/App';
import App from './jizhongguanli/App'

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>

            <App />


        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
)

