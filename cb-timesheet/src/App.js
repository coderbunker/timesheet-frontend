import React, { Component } from 'react';
import './App.css';
import ProjectView from './containers/ProjectView';
import TimeView from './containers/TimeView';

//To use a ReactRouter

import { 
  Route,
  HashRouter 
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    	<HashRouter>
	      <div className="App">
	        <Route path="//" component={ProjectView} />
            <Route path="/time" component={TimeView} />
	      </div>
      	</HashRouter>
    );
  }
}

export default App;
