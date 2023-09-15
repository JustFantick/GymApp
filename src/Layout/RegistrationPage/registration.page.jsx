import React, { useRef, useState } from 'react';
import './registration.page.less';
import PageContainer from '../../components/page-container/page-container.jsx';
import { SectionTitle } from '../../components/section-title/section-title.jsx';
import { InputName } from '../../components/form-inputs/input-name.jsx';
import { InputSubscription } from '../../components/form-inputs/input-subscription.jsx';
import Schedule from '../../components/schedule/schedule.jsx';
import SubmitButton from '../../components/submit-button/submit-button.jsx';

export default function RegistrationPage() {
	const nameRef = useRef(null);
	const subscriptionRef = useRef(null);

	const [subscription, setSubscription] = useState(0);
	const [schedule, setSchedule] = useState([
		{
			weekday: { short: "Пн", full: "Понеділок" },
			isActive: true,
			time: "12:00",
		},
		{
			weekday: { short: "Вт", full: "Вівторок" },
			isActive: false,
			time: "12:00",
		},
		{
			weekday: { short: "Ср", full: "Середа" },
			isActive: true,
			time: "13:00",
		},
		{
			weekday: { short: "Чт", full: "Четвер" },
			isActive: false,
			time: "12:00",
		},
		{
			weekday: { short: "Пт", full: "П'ятниця" },
			isActive: true,
			time: "14:30",
		},
		{
			weekday: { short: "Сб", full: "Субота" },
			isActive: false,
			time: "12:00",
		},
	]);

	return (
		<PageContainer>
			<form className='registration'>
				<div className="registration__section">
					<SectionTitle>Заповніть поля вводу</SectionTitle>

					<InputName ref={nameRef} />
					<InputSubscription
						subscriptionValue={subscription}
						setSubscription={setSubscription}
						ref={subscriptionRef}
					/>
				</div>

				<div className="registration__section">
					<SectionTitle>Визначте графік відвідувань</SectionTitle>

					<Schedule schedule={schedule} setSchedule={setSchedule} />
				</div>

				<div className="registration__sumbit-btn">
					<SubmitButton>Зареэструвати</SubmitButton>
				</div>

			</form>

		</PageContainer>
	)
}
