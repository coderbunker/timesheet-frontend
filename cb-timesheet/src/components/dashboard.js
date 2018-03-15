import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


const query = gql`{
	allEntries(condition: {resource: "Ricky" projectName: "Yedian"}) {
	  edges {
	    node {
	      resource
	      projectName
	      hoursWorked
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
    return(
      <div className="dashboard">
        <h3>TimeSheet Dashboard</h3>
        <p>welcome, </p>
      </div>
    )
  }
}
        

Dashboard = graphql(query)(Dashboard)


export default Dashboard