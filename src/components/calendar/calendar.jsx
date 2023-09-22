import React from 'react';
import './calendar.less';
import { DateCalendar } from '@mui/x-date-pickers';
import { CalendarLocalizator } from './calendar-localizator.jsx';

export default function Calendar({ date, onDateChange }) {
	return (
		<CalendarLocalizator>
			<DateCalendar
				views={['day']}
				value={date}
				onChange={(newValue) => onDateChange(newValue)}
			/>
		</CalendarLocalizator>
	)
}
