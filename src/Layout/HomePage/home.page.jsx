import React, { useState } from 'react';
import './home.page.less';
import PageContainer from '../../components/page-container/page-container.jsx';
import HourSchedule from '../../components/hour-schedule/hour-schedule.jsx';
import { useVisitorsStore } from '../../store/store.js';
import PopupContainer from '../../components/popup-container/popup-container.jsx';
import VisitorCart from '../../components/visitor-cart/visitor-cart.jsx';
import { SectionTitle } from '../../components/section-title/section-title.jsx';

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

	const [isPopupOpen, setIsPopupOpen] = useState(false);

	return (
		<main className='home'>
			<PageContainer>
				<div className="home__body">
					<SectionTitle>
						{`${weekDaysArr[date.getDay() - 1]}, ${date.getDate()}`}
					</SectionTitle>

					{
						hoursArr.map((hour, id) => (
							<HourSchedule key={id}
								addBtnOnClick={() => setIsPopupOpen(true)}
								hour={hour}
								visitorsList={getVisitorsListByHour(hour)} />
						))
					}

				</div>
			</PageContainer>

			<PopupContainer isOpen={isPopupOpen} closePopup={() => setIsPopupOpen(false)}>
				<div className="flex-gap">
					{visitorsList.map((li, id) => (
						<VisitorCart key={id}
							name={li.name}
							subscriptionCounter={li.subscription}
							minimized={true}
							theme='light'
						/>
					))}
				</div>
			</PopupContainer>
		</main>
	)
}
