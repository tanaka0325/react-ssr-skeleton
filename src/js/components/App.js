import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return(
      <div>
        This is App component!
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/list">List</Link></li>
          <li><Link to="/">Top</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App;
