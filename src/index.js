import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bene from './Bene';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Bene />, document.getElementById('root'));
registerServiceWorker();
