import React, { useState } from 'react';
import './home.page.less';
import PageContainer from '../../components/page-container/page-container.jsx';
import HourSchedule from '../../components/hour-schedule/hour-schedule.jsx';
import { useVisitorsStore } from '../../store/visitorStore.js';
import { SectionTitle } from '../../components/section-title/section-title.jsx';
import PopupAddVisitor from '../../components/popup-add-visitor/popup-add-visitor.jsx';

export default function HomePage() {
	const date = new Date();
	const weekDaysArr = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'];

	const visitorsList = useVisitorsStore(state => state.visitors);
	const [todayVisitors, setTodayVisitors] = useState(
		visitorsList.filter(li => li.schedule[0].isActive === true).map(li => {
			return { ...li, todaysTime: li.schedule[0].time };
		})
	);

	function setVisitorsList(userId) {
		setTodayVisitors(
			todayVisitors.filter(li => userId !== li.id)
		);
	}

	const hoursArr = [...new Set(todayVisitors.map(el => el.todaysTime))].sort();

	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [popupHour, setPopupHour] = useState('12:00');

	function openPopup(hour) {
		setIsPopupOpen(true);
		setPopupHour(hour);
	}

	function addVisitor(visitorObj) {
		setIsPopupOpen(false);
		setTodayVisitors([
			...todayVisitors,
			{
				...visitorObj,
				todaysTime: popupHour,
			}
		]);
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
									addBtnOnClick={() => openPopup(hour)}
									hour={hour}
									visitorsList={
										todayVisitors.filter(el => el.todaysTime === hour)
									}
								/>
							))
						}
					</div>

				</PageContainer>

			</main>

			<PopupAddVisitor
				visitorsList={visitorsList.filter(li => todayVisitors.map(el => el.id).indexOf(li.id) == -1)}
				isOpen={isPopupOpen}
				closePopup={() => setIsPopupOpen(false)}
				addVisitorFunc={addVisitor}
			/>
		</>
	)
}
