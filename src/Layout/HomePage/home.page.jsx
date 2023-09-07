import React from 'react';
import './home.page.less';
import PageContainer from '../../components/page-container/page-container.jsx';
import HourSchedule from '../../components/hour-schedule/hour-schedule.jsx';

export default function HomePage() {
	const date = new Date();
	const weekDaysArr = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота', 'Неділя'];

	return (
		<main className='home'>
			<PageContainer>
				<div className="home__body">
					<h2 className="page-title">
						{`${weekDaysArr[date.getDay()]}, ${date.getDate()}`}
					</h2>

					<HourSchedule hour={'12:00'} />

				</div>
			</PageContainer>

		</main>
	)
}
