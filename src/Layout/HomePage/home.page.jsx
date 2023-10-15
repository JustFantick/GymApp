import React, { useEffect } from 'react';
import './home.page.less';
import ScheduleTable from '../../components/schedule-table/schedule-table.jsx';
import { useVisitorsStore } from '../../store/visitorStore';
import moment from 'moment';

export default function HomePage() {
	const todayDate = useVisitorsStore(state => state.todayDate);
	const setTodayDate = useVisitorsStore(state => state.setTodayDate);
	const setTodaysVisitors = useVisitorsStore(state => state.setTodaysVisitors);

	useEffect(() => {
		if (todayDate === null || todayDate !== moment().dayOfYear()) {
			setTodayDate(moment().dayOfYear());
			setTodaysVisitors([]);
		}
	}, []);

	return (
		<main className='home'>
			<div className="home__body">
				<ScheduleTable />

			</div>

		</main>
	)
}