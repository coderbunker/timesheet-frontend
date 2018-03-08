import React, { Component } from 'react';

import DashBoard from '../components/dashboard';
import TimeEntryWidget from '../components/timeEntryWidget'

class TimeView extends Component {
	render() {
		return (
			<div>
				<DashBoard />
				<TimeEntryWidget />
			</div>
		)
	}
};

export default TimeView