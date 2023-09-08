import React from 'react';
import './schedule.less';
import ScheduleDay from './schedule-day.jsx';

export default function Schedule({ schedule, setSchedule }) {
	function updateSchedule(weekdayNumber) {
		setSchedule(schedule.map((el, id) => {
			if (id !== weekdayNumber) {
				return el;
			} else {
				el.isActive = !el.isActive;
				return el;
			}
		}));
	}

	return (
		<div className='schedule'>
			{
				schedule.map((day, id) => (
					<ScheduleDay key={id}
						time={day.time} day={day.weekday}
						status={day.isActive}
						setStatus={() => updateSchedule(id)}
					/>
				))
			}

		</div>
	)
}
