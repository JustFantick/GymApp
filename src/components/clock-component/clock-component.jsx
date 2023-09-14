import React from 'react';
import './clock-component.less';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DigitalClock } from '@mui/x-date-pickers';
import moment from 'moment/moment';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

export default function ClockComponent({ weekday, hour, setTime }) {
	const timeFormat = "HH:mm";

	const shouldDisableTime = (value, view) => {
		const hour = value.hour();
		if (view === 'hours') {
			return hour < 12 || hour > 18;
		}
		return false;
	};

	return (
		<LocalizationProvider
			dateAdapter={AdapterMoment}
			adapterLocale='uk'
		>
			<div className="clock">
				<div className="clock__weekday">{weekday}</div>

				<DigitalClock
					value={moment(hour, timeFormat)}
					skipDisabled //cancels render for disabled list items
					shouldDisableTime={shouldDisableTime}
					timeStep={30} ampm={false}
					onChange={(value) => setTime(value.format(timeFormat))}
				/>

			</div>
		</LocalizationProvider>
	)
}