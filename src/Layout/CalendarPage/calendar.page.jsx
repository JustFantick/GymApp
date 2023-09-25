import React, { useEffect, useState } from 'react';
import './calendar.page.less';
import PageContainer from '../../components/page-container/page-container.jsx';
import Calendar from '../../components/calendar/calendar.jsx';
import { useVisitorsStore } from '../../store/visitorStore';
import HourSchedule from '../../components/hour-schedule/hour-schedule.jsx';
import moment from 'moment';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function CalendarPage() {
	const visitorsList = useVisitorsStore(state => state.visitors);

	const [currentDate, setCurrentDate] = useState(moment());
	const currentDayIndex = currentDate.day() - 1 >= 0 ? currentDate.day() - 1 : -1;

	const [weekdayVisitors, setWeekdayVisitors] = useState([]);

	const [listRef] = useAutoAnimate();

	useEffect(() => {
		setWeekdayVisitors(
			() => {
				if (currentDayIndex === -1) return [];
				return visitorsList.filter(li => {
					if (li.schedule[currentDayIndex].isActive === true) {
						return { ...li, todaysTime: li.schedule[currentDayIndex].time };
					}
				});
			}
		)
	}, [currentDate]);

	const hoursArr = [...new Set(
		currentDayIndex >= 0 ? weekdayVisitors.map(el => el.schedule[currentDayIndex].time) : []
	)].sort();

	return (
		<div className="calendar-page">
			<div className="calendar-page__calendar">
				<Calendar date={currentDate} onDateChange={(date) => setCurrentDate(date)} />
			</div>

			<PageContainer>
				<div className="calendar-page__visitors-list" ref={listRef}>
					{
						hoursArr.map((hour, id) => (
							<HourSchedule key={id}
								hour={hour}
								visitorsList={
									weekdayVisitors.filter(el => el.schedule[currentDayIndex].time === hour)
								}
								showSubscriptionCounter={false}
							/>
						))
					}
				</div>

			</PageContainer>

		</div>
	)
}
