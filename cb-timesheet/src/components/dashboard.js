import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

var nameTest;

const TimeQuery = gql `query{
	allHoursByProjectAndResources {
    edges {
      node {
        resource
        projectName
        sum {
          hours
          minutes
        }
      }
    }
  } 
}`
        
	      
//-=-=-=-=-   Running locally:  -=-=-=-=-=-=-
// If data.allEntries is undefined.  
//Make sure you have run these two lines in local 'timesheet-backend' directory
//first run this-->  pg_ctl -D /usr/local/var/postgres start
//AND
//then run this -->  node_modules/.bin/postgraphile -c $USER:localhost:5432/timesheet -s timedata -o
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  handleNameChange(e) {
    nameTest = e.target.value
  }
  

  render() {
    //the select elements value should trigger a dynamic graphql query
  	let { data } = this.props
  	console.log(data)
  	// console.log(window)
    console.log(this.props)
    // console.log(data)
    
        
    return(
      <div className="dashboard">
        <h3>TimeSheet Dashboard</h3>
        <p>Welcome, {window.name} </p>
        <form onChange={this.handleNameChange}>
          <select id="dropdown">
            <option id="ricky" value="Ricky">Ricky</option>
            <option id="nelson" value="Nelson">Nelson</option>
            <option id=" fred" value="Fred">Fred</option>
          </select>
        </form>
      </div>
    )
  }
};
 
     
Dashboard = graphql(TimeQuery)(Dashboard)


export default Dashboard