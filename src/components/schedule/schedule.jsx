import React, { useState } from 'react';
import './schedule.less';
import ScheduleDay from './schedule-day.jsx';
import PopupContainer from '../popup-container/popup-container.jsx';
import ClockComponent from '../clock-component/clock-component.jsx';

export default function Schedule({ schedule, setSchedule }) {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [scheduleId, setScheduleId] = useState(0);

	function openSchedulePopup(id) {
		setIsPopupOpen(true);
		setScheduleId(id);
	}

	function updateSchedule(weekdayNumber) {
		setSchedule(schedule.map((el, id) => {
			if (id !== weekdayNumber) {
				return el;
			} else {
				if (!el.isActive) {
					setTimeout(() => {
						openSchedulePopup(id);
					}, 200);
				}
				return { ...el, isActive: !el.isActive };
			}
		}));
	}

	function setScheduleTime(time) {
		setSchedule(
			schedule.map((day, n) => {
				if (n !== scheduleId) {
					return day;
				} else {
					day.time = time;
					return day;
				}
			})
		);

		setIsPopupOpen(false);
	}

	return (
		<>
			<div className='schedule'>
				{
					schedule.map((day, id) => (
						<ScheduleDay key={id}
							time={day.time} day={day.weekday.short}
							status={day.isActive}
							setStatus={() => updateSchedule(id)}

							openPopup={() => openSchedulePopup(id)}
						/>
					))
				}

			</div>

			<PopupContainer isOpen={isPopupOpen} closePopup={() => setIsPopupOpen(false)}>
				<center>
					<ClockComponent
						hour={schedule[scheduleId] && schedule[scheduleId].time}
						weekday={schedule[scheduleId] && schedule[scheduleId].weekday.full}
						setTime={setScheduleTime}
					/>
				</center>
			</PopupContainer>
		</>
	)
}
