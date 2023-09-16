import React, { useEffect, useState } from 'react';
import { DateCalendar } from '@mui/x-date-pickers';
import { CalendarLocalizator } from './calendar-localizator.jsx';
import moment from 'moment';

import { Badge } from '@mui/material';
import { PickersDay } from '@mui/x-date-pickers';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

export default function MarkingMiniCalendar({ weekdaysList, subscription }) {
	const [attendance, setAttendance] = useState([]);
	const [lastSubscribtionIndex, setLastSubscribtionIndex] = useState(null);

	useEffect(() => {
		const temp = [];
		const startOfMonth = moment().startOf('month');
		const endOfMonth = moment().endOf('month');

		for (startOfMonth; startOfMonth <= endOfMonth; startOfMonth.add(1, 'day')) {
			if (weekdaysList.includes(startOfMonth.weekday())) {
				temp.push(startOfMonth.date());
			}
		}

		let closestAttendanceIndex;
		if (temp.indexOf(moment().date()) >= 0) {
			closestAttendanceIndex = temp.indexOf(moment().date());
		} else {
			//if Today is inactive, find closest active date
			let todayDate = moment();
			while (!weekdaysList.includes(todayDate.day())) {
				todayDate.add(1, 'day');
			}
			closestAttendanceIndex = temp.indexOf(todayDate.date());
		}

		setAttendance(temp);
		setLastSubscribtionIndex(closestAttendanceIndex + (subscription - 1));
	}, [subscription]);

	function DayToRender(props) {
		const { weekdaysList = [], day, outsideCurrentMonth, ...other } = props;

		const isHighlighted = () => {
			var state = false;
			weekdaysList.forEach(date => {
				if (date == props.day.day()) state = true;
			});
			return !props.outsideCurrentMonth && state;
		};

		const badgeCX = { transform: 'translate(-5%, 5%)', fontWeight: '600' };
		const MarkToRender =
			props.day.date() <= attendance[lastSubscribtionIndex] ?
				<DoneRoundedIcon sx={{ ...badgeCX, color: 'green', }} /> :
				<DoneRoundedIcon sx={{ ...badgeCX, color: '#fbba72', }} />;

		return (
			<Badge
				key={props.day.toString()}
				overlap="circular"
				badgeContent={isHighlighted() ? MarkToRender : undefined}
			>
				<PickersDay {...other} outsideCurrentMonth={outsideCurrentMonth} day={day} />
			</Badge>
		);
	}

	return (
		<CalendarLocalizator>
			<DateCalendar
				readOnly
				value={moment()}
				views={['day']}

				slots={{
					day: DayToRender,
				}}
				slotProps={{
					day: { weekdaysList }
				}}
			/>
		</CalendarLocalizator>
	)
}
