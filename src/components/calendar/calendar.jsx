import React, { useState } from 'react';
import './calendar.less';
import { DateCalendar } from '@mui/x-date-pickers';
import { CalendarLocalizator } from './calendar-localizator.jsx';
import moment from "moment";

export default function Calendar() {
	const [currentDay, setCurrentDay] = useState(moment());

	return (
		<CalendarLocalizator>
			<DateCalendar
				views={['day']}
				value={currentDay}
				onChange={(newValue) => setCurrentDay(newValue)}
			/>
		</CalendarLocalizator>
	)
}
