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
			weekday: "Пн",
			isActive: true,
			time: "12:00",
		},
		{
			weekday: "Вт",
			isActive: false,
			time: "00:00",
		}, {
			weekday: "Ср",
			isActive: true,
			time: "13:00",
		}
		, {
			weekday: "Чт",
			isActive: false,
			time: "00:00",
		}
		, {
			weekday: "Пт",
			isActive: true,
			time: "14:30",
		}
		, {
			weekday: "Сб",
			isActive: false,
			time: "00:00",
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
