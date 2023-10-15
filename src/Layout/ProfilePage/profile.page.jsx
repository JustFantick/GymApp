import React, { useEffect, useState } from 'react';
import './profile.page.less';
import PageContainer from '../../components/page-container/page-container.jsx';
import { InputName } from '../../components/form-inputs/input-name.jsx';
import { InputSubscription } from '../../components/form-inputs/input-subscription.jsx';
import { SectionTitle } from '../../components/section-title/section-title.jsx';
import Schedule from '../../components/schedule/schedule.jsx';
import MarkingMiniCalendar from '../../components/calendar/marking-mini-calendar.jsx';
import { useLoaderData } from 'react-router-dom';
import { useVisitorsStore } from '../../store/visitorStore';

export default function ProfilePage() {
	const { id } = useLoaderData();
	const visitorsList = useVisitorsStore(state => state.visitors);
	const profile = visitorsList.filter(li => li.id == id)[0];

	const [name, setName] = useState(profile.name);
	const [subscription, setSubscription] = useState(profile.subscription);
	const [schedule, setSchedule] = useState(profile.schedule);

	const getWeekdaysList = () => {
		const result = [];
		schedule.forEach(weekday => {
			if (weekday.isActive) result.push(weekday.date);
		});
		return result;
	}

	const setVisitorName = useVisitorsStore(state => state.setVisitorName);
	const setVisitorSubscription = useVisitorsStore(state => state.setVisitorSubscription);
	const setVisitorSchedule = useVisitorsStore(state => state.setVisitorSchedule);

	useEffect(() => {
		if (name != profile.name) setVisitorName(id, name);
	}, [name]);


	useEffect(() => {
		if (subscription != profile.subscription) setVisitorSubscription(id, subscription);
	}, [subscription]);


	useEffect(() => {
		if (schedule != profile.schedule) setVisitorSchedule(id, schedule);
	}, [schedule]);

	return (
		<PageContainer>
			<div className="profile">
				<div className="profile__section">
					<InputName name={name} setName={setName} label='ПІБ' />
				</div>

				<div className="profile__section">
					<InputSubscription subscriptionValue={subscription} setSubscription={setSubscription} />
				</div>

				<div className="profile__section calendar">
					<MarkingMiniCalendar weekdaysList={getWeekdaysList()} subscription={subscription} />
				</div>

				<div className="profile__section schedule">
					<SectionTitle>Графік відвідувань</SectionTitle>
					<Schedule schedule={schedule} setSchedule={setSchedule} />
				</div>

			</div>

		</PageContainer>
	)
}
