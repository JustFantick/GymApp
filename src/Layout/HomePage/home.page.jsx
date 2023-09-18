import React, { useState } from 'react';
import './home.page.less';
import PageContainer from '../../components/page-container/page-container.jsx';
import HourSchedule from '../../components/hour-schedule/hour-schedule.jsx';
import { useVisitorsStore } from '../../store/store.js';
import { SectionTitle } from '../../components/section-title/section-title.jsx';
import PopupAddVisitor from '../../components/popup-add-visitor/popup-add-visitor.jsx';

export default function HomePage() {
	const date = new Date();
	const weekDaysArr = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'];

	const visitorsList = useVisitorsStore(state => state.visitors);
	const [todayVisitors, setTodayVisitors] = useState(
		visitorsList.filter(li => li.schedule[0].isActive === true)
	);

	function setVisitorsList(userId) {
		setTodayVisitors(
			todayVisitors.filter(li => userId !== visitorsList.indexOf(li))
		);
	}

	const hoursArr = [...new Set(todayVisitors.map(el => el.schedule[0].time))];

	const [isPopupOpen, setIsPopupOpen] = useState(false);
	function addVisitor(visitorName) {
		console.log(visitorName);
		setIsPopupOpen(false);
	}

	return (
		<>
			<main className='home'>
				<PageContainer>
					<div className="home__body">
						<SectionTitle>
							{`${weekDaysArr[date.getDay()]}, ${date.getDate()}`}
						</SectionTitle>

						{
							hoursArr.map((hour, id) => (
								<HourSchedule key={id}
									removeVisitor={setVisitorsList}
									addBtnOnClick={() => setIsPopupOpen(true)}
									hour={hour}
									visitorsList={
										todayVisitors.filter(el => el.schedule[0].time === hour)
									}
								/>
							))
						}
					</div>

				</PageContainer>

			</main>

			<PopupAddVisitor
				visitorsList={visitorsList}
				isOpen={isPopupOpen}
				closePopup={() => setIsPopupOpen(false)}
				addVisitorFunc={addVisitor}
			/>
		</>
	)
}
