import React, { Component } from 'react'
import ACTIONS from '../actions'


class TimeEntryWidget extends Component {
  handleSubmit(e) {
    e.preventDefault();
    var f = e.target
    console.log(f.projectName.value, f.resource.value, f.activity.value, f.date.value, f.startTime.value, f.stopTime.value )
    var formData = {
      projectName: f.projectName.value,
      resource: f.resource.value,
      date: f.date.value,
      startTime: f.startTime.value,
      stopTime: f.stopTime.value,
      activity: f.activity.value,
      taskName: f.taskName.value
    };
    ACTIONS.appendValues(formData)
  }

  render() {
    return(
      <div className="time-entry-widget">
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="date">Date:</label>
          <input id="date" type="date"></input>


          <label htmlFor="startTime">Start Time: </label>
          <input id="startTime" type="time"></input>

          <label htmlFor="stopTime">Stop Time:</label>
          <input id="stopTime" type="time"></input>

          <label htmlFor="project-name">Project Name:</label>
          <select name="projectName" id="projectName">
            <option>Atlas</option>
            <option>Yedian</option>
          </select>

          <label htmlFor="resource">Contributer:</label>
          <select name="resource" id="resource">
            <option>Ricky</option>
            <option>Stephan</option>
            <option>Nelson</option>
            <option>Fred</option>
          </select>

          <label>Activity:</label>
          <input id="activity" type="text"></input>

          <label>Task Name:</label>
          <select name="taskName" id="taskName">
            <option>React-Native</option>
            <option>Setup</option>
            <option>Planning</option>
            <option>Processing</option>
            <option>Recruitment</option>
            <option>Core-Model</option>
          </select>
        
          <input id="" type="submit"></input>
        </form>
      </div>
    )
  }
}

export default TimeEntryWidget