import React from 'react';
import ReactDOM from 'react-dom';
import Bene from './Bene';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bene />, div);
  ReactDOM.unmountComponentAtNode(div);
});
