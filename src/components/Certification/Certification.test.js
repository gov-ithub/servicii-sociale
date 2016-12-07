import React from 'react';
import ReactDOM from 'react-dom';
import Certification from '../Certification';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Certification />, div);
});
