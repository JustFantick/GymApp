import React, { useRef, useState } from 'react';
import './registration.page.less';
import PageContainer from '../../components/page-container/page-container.jsx';
import { SectionTitle } from '../../components/section-title/section-title.jsx';
import { InputName } from '../../components/form-inputs/input-name.jsx';
import { InputSubscription } from '../../components/form-inputs/input-subscription.jsx';
import Schedule from '../../components/schedule/schedule.jsx';
import SubmitButton from '../../components/submit-button/submit-button.jsx';
import PopupContainer from '../../components/popup-container/popup-container.jsx';
import DigitalCounter from '../../components/digital-counter/digital-counter.jsx';

export default function RegistrationPage() {
	const nameRef = useRef(null);
	const subscriptionRef = useRef(null);

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

	const [isPopupOpen, setIsPopupOpen] = useState(true);
	const [subscription, setSubscription] = useState(4);

	return (
		<PageContainer>
			<form className='registration'>
				<div className="registration__section">
					<SectionTitle>Заповніть поля вводу</SectionTitle>

					<InputName ref={nameRef} />
					<InputSubscription
						value={subscription}
						setValue={setSubscription}
						openPopup={() => setIsPopupOpen(true)}
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

			<PopupContainer isOpen={isPopupOpen} closePopup={setIsPopupOpen}>
				<div style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
					<DigitalCounter value={subscription} setValue={setSubscription} />
				</div>
			</PopupContainer>
		</PageContainer>
	)
}
