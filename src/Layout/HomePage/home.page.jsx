import React from 'react';
import './home.page.less';
import ScheduleTable from '../../components/schedule-table/schedule-table.jsx';

export default function HomePage() {
	return (
		<main className='home'>
			<div className="home__body">
				<ScheduleTable />

			</div>

		</main>
	)
}