import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom'

const query = `query: {

}`;

export  default class ProjectView extends Component {
  render () {
    return (
    	<div>
	    	<h1>Welcome to CoderBunker Time-Entry-Project</h1>
	    	<p>The user should sign in here and be directed to TimeView</p>
			<Link to="/time"><button>links to timeView</button></Link>
		</div>
	)
  }
}