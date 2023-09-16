import React, { useState } from 'react';
import './profile.page.less';
import PageContainer from '../../components/page-container/page-container.jsx';
import { InputName } from '../../components/form-inputs/input-name.jsx';
import { InputSubscription } from '../../components/form-inputs/input-subscription.jsx';
import { SectionTitle } from '../../components/section-title/section-title.jsx';
import Schedule from '../../components/schedule/schedule.jsx';
import MarkingMiniCalendar from '../../components/calendar/marking-mini-calendar.jsx';

export default function ProfilePage() {
	const [name, setName] = useState('Сік Добрий');
	const [subscription, setSubscription] = useState(1);
	const [schedule, setSchedule] = useState([
		{
			date: 1,
			weekday: { short: "Пн", full: "Понеділок" },
			isActive: true,
			time: "12:00",
		},
		{
			date: 2,
			weekday: { short: "Вт", full: "Вівторок" },
			isActive: false,
			time: "12:00",
		},
		{
			date: 3,
			weekday: { short: "Ср", full: "Середа" },
			isActive: true,
			time: "13:00",
		},
		{
			date: 4,
			weekday: { short: "Чт", full: "Четвер" },
			isActive: false,
			time: "12:00",
		},
		{
			date: 5,
			weekday: { short: "Пт", full: "П'ятниця" },
			isActive: true,
			time: "14:30",
		},
		{
			date: 6,
			weekday: { short: "Сб", full: "Субота" },
			isActive: false,
			time: "12:00",
		},
	]);

	const weekdaysList = () => {
		const result = [];
		schedule.forEach(weekday => {
			if (weekday.isActive) result.push(weekday.date);
		});
		return result;
	}
	console.log(weekdaysList());

	return (
		<PageContainer>
			<div className="profile">
				<div className="profile__section">
					<InputName name={name} setName={setName} />
				</div>

				<div className="profile__section">
					<InputSubscription subscriptionValue={subscription} setSubscription={setSubscription} />
				</div>

				<div className="profile__section calendar">
					<MarkingMiniCalendar weekdaysList={weekdaysList()} subscription={subscription} />
				</div>

				<div className="profile__section schedule">
					<SectionTitle>Графік відвідувань</SectionTitle>
					<Schedule schedule={schedule} setSchedule={setSchedule} />
				</div>

			</div>

		</PageContainer>
	)
}
