import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

var nameTest;
const TimeQuery = gql `query ($resource: String!){
	allHoursByProjectAndResources (condition: {resource: $resource}) {
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
        

class Dashboard extends Component {

  render() {
    console.log(this.props.data.allHoursByProjectAndResources)
    return(
      <div className="dashboard">
        <h3>TimeSheet Dashboard</h3>
        <p id="welcome">Welcome, {window.name}</p>
        <ul id="project-ul"> {this.props.data.allHoursByProjectAndResources ? this.props.data.allHoursByProjectAndResources.edges.map((timeData) => {
          return <li id="project-li">Project: {timeData.node.projectName}
          <p id="p-li">{timeData.node.sum.hours ? timeData.node.sum.hours : 0} hours and {timeData.node.sum.minutes ? timeData.node.sum.minutes: 0} minutes</p>
          </li>
          
            
          }) : console.log('sorry')}
          
        </ul>
      </div>
    )
  }
};
    
 
var DashboardWithData = graphql(TimeQuery, {
  options: {
    variables: {
      resource: window.name
    }
  }
})(Dashboard)


export default DashboardWithData