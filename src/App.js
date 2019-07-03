import React, { Component,Fragment} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className = "App">
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}
export default App;
