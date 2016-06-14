import React from 'react';
import { Link } from 'react-router';

const App = (props) => (
  <div>
    This is App component!
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/list">List</Link></li>
      <li><Link to="/">Top</Link></li>
    </ul>
    {props.children}
  </div>
);

export default App;
