import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

var nameTest = "Ricky"

var queryString = gql
// console.log(queryString)
const query = gql`{
	allEntries(condition: {resource: "Ricky"}) {
    edges {
      node {
        projectName
        hoursWorked
        hourlyRate
        total
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

  render() {
  	let { data } = this.props
  	console.log(data.allEntries)
  	console.log(window)
    console.log(this.props)
    console.log(data)
    
    return(
      <div className="dashboard">
        <h3>TimeSheet Dashboard</h3>
        <p>Welcome, {window.name} </p>
      </div>
    )
  }
};
        

Dashboard = graphql(query, {
  options: {
    variables: {
      resource: "Ricky"
    }
  }
})(Dashboard)


export default Dashboard