import React, { useState, lazy, Suspense } from 'react';
import './schedule.less';
import ScheduleDay from './schedule-day.jsx';
const PopupContainer = lazy(() => import('../popup-container/popup-container.jsx'));
const ClockComponent = lazy(() => import('../clock-component/clock-component.jsx'));

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
				if (n !== scheduleId) return day;
				return { ...day, time: time };
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

			<Suspense>
				<PopupContainer isOpen={isPopupOpen} closePopup={() => setIsPopupOpen(false)}>
					<center>
						<ClockComponent
							hour={schedule[scheduleId] && schedule[scheduleId].time}
							weekday={schedule[scheduleId] && schedule[scheduleId].weekday.full}
							setTime={setScheduleTime}
						/>
					</center>
				</PopupContainer>

			</Suspense>
		</>
	)
}
