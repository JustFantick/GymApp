import React, { useEffect, useState } from 'react';
import { DateCalendar } from '@mui/x-date-pickers';
import { CalendarLocalizator } from './calendar-localizator.jsx';
import moment from 'moment';
import './marking-mini-calendar.less';
import { Badge } from '@mui/material';
import { PickersDay } from '@mui/x-date-pickers';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

export default function MarkingMiniCalendar({ weekdaysList, subscription }) {
	const [lastSubscriptionDate, setLastSubscriptionDate] = useState(null);

	useEffect(() => {
		if (weekdaysList.length === 0) return; //if visitor got an empty schedule list skip the following

		let startDate = moment();
		let subscriptionCounter = subscription;

		while (subscriptionCounter) {
			if (weekdaysList.includes(startDate.weekday())) subscriptionCounter--;
			startDate.add(1, 'day');
		}
		setLastSubscriptionDate(startDate);

	}, [subscription, weekdaysList]);

	function DayToRender(props) {
		const { weekdaysList = [], day, outsideCurrentMonth, ...other } = props;

		const isHighlighted = () => {
			let state = false;
			weekdaysList.forEach(date => {
				if (date == props.day.day()) state = true;
			});
			return !props.outsideCurrentMonth && state;
		};

		const MarkingIconTypes = {
			green: <DoneRoundedIcon sx={
				{ transform: 'translate(-5%, 5%)', fontWeight: '600', color: 'green', }
			} />,
			yellow: <DoneRoundedIcon sx={
				{ transform: 'translate(-5%, 5%)', fontWeight: '600', color: '#fbba72', }
			} />,
		}

		const MarkToRender =
			props.day.isBefore(lastSubscriptionDate) ? MarkingIconTypes['green'] : MarkingIconTypes['yellow'];

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
		<div className='marking-mini-calendar'>
			<CalendarLocalizator>
				<DateCalendar
					readOnly
					value={moment()}
					views={['day']}

					slots={{ day: DayToRender }}
					slotProps={{ day: { weekdaysList } }}
				/>
			</CalendarLocalizator>

		</div>
	)
}
