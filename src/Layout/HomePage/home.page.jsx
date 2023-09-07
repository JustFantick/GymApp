import React, { useState } from 'react';
import './home.page.less';
import PageContainer from '../../components/page-container/page-container.jsx';
import HourSchedule from '../../components/hour-schedule/hour-schedule.jsx';
import { useVisitorsStore } from '../../store/store.js';

export default function HomePage() {
	const date = new Date();
	const weekDaysArr = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота', 'Неділя'];

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
		<main className='home'>
			<PageContainer>
				<div className="home__body">
					<h2 className="page-title">
						{`${weekDaysArr[date.getDay() - 1]}, ${date.getDate()}`}
					</h2>

					{
						hoursArr.map((hour, id) => (
							<HourSchedule key={id} hour={hour} visitorsList={getVisitorsListByHour(hour)} />
						))
					}

				</div>
			</PageContainer>

		</main>
	)
}
