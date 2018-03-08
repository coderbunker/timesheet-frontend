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
	      

class Dashboard extends Component {
  render() {
  	let { data } = this.props
  	console.log(data.allEntries)
    return(
      <div className="dashboard">
        <h3>TimeSheet Dashboard</h3>
      </div>
    )
  }
}
        

Dashboard = graphql(query)(Dashboard)


export default Dashboard