import React, { useState } from 'react';
import './calendar.page.less';
import PageContainer from '../../components/page-container/page-container.jsx';
import Calendar from '../../components/calendar/calendar.jsx';
import { useVisitorsStore } from '../../store/visitorStore';
import HourSchedule from '../../components/hour-schedule/hour-schedule.jsx';

export default function CalendarPage() {
	const visitorsList = useVisitorsStore(state => state.visitors);
	const [todayVisitors, setTodayVisitors] = useState(
		visitorsList.filter(li => li.schedule[0].isActive === true)
	);
	const [hoursArr, setHoursArr] = useState(
		[...new Set(todayVisitors.map(el => el.schedule[0].specifiedTime))]
	);

	function getVisitorsListByHour(hour) {
		return todayVisitors.filter(el => el.schedule[0].specifiedTime === hour);
	}

	return (
		<div className="calendar-page">
			<div className="calendar-page__calendar">
				<Calendar />
			</div>

			<PageContainer>
				<div className="calendar-page__visitors-list">
					{
						hoursArr.map((hour, id) => (
							<HourSchedule key={id}
								hour={hour}
								visitorsList={getVisitorsListByHour(hour)}
								showSubscriptionCounter={false}
							/>
						))
					}
				</div>
			</PageContainer>

		</div>
	)
}
