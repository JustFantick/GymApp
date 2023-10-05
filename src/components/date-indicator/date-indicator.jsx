import React from 'react';
import './date-indicator.less';

export default function DateIndicator({ weekday, date }) {
	const weekDaysArr = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

	return (
		<div className="weekday-btn">
			<div className="weekday-btn__weekday">{weekDaysArr[weekday]}</div>
			<div className="weekday-btn__date">{date}</div>
		</div>
	)
}
