import React, { Component } from 'react';
import './App.css';
// import ProjectView from './containers/ProjectView';
import TimeView from './containers/TimeView';

class App extends Component {
  render() {
    return (
	      <div className="App">
	        <TimeView />
	      </div>
    );
  }
}

export default App;
      
        
