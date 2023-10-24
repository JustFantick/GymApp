import React, { useState } from 'react';
import './registration.page.less';
import PageContainer from '../../components/page-container/page-container.jsx';
import { SectionTitle } from '../../components/section-title/section-title.jsx';
import { InputName } from '../../components/form-inputs/input-name.jsx';
import { InputSubscription } from '../../components/form-inputs/input-subscription.jsx';
import Schedule from '../../components/schedule/schedule.jsx';
import SubmitButton from '../../components/submit-button/submit-button.jsx';
import { useVisitorsStore } from '../../store/visitorStore';
import { Toaster, toast } from 'sonner';

export default function RegistrationPage() {
	const [name, setName] = useState('');
	const [isNameValid, setIsNameValid] = useState(true);
	const [subscription, setSubscription] = useState(0);

	const scheduleTemplate = useVisitorsStore(state => state.scheduleTemplate);
	const addNewVisitor = useVisitorsStore((state) => state.addNewVisitor);
	const [schedule, setSchedule] = useState(scheduleTemplate);

	function setDefaultStateValues() {
		setName('');
		setIsNameValid(true);
		setSubscription(0);
		setSchedule(scheduleTemplate);
	}

	function onSubmitHandler() {
		const scrollToTheTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

		if (name === '') {
			toast.error('Заповніть поле');
			setIsNameValid(false);
			scrollToTheTop();
		} else if (/^\d+$/.test(name)) {
			toast.error('Поле не повинно містити лише числа');
			setIsNameValid(false);
			scrollToTheTop();
		}
		else {
			toast.success(`Успішно зареэстровано: ${name}`);

			setIsNameValid(true);
			addNewVisitor(name, subscription, schedule);
			setDefaultStateValues();
		}
	}

	return (
		<PageContainer>
			<form className='registration'>
				<div className="registration__section">
					<SectionTitle>Заповніть поля вводу</SectionTitle>

					<InputName
						name={name} setName={setName}
						label={'ПІБ'} isValid={isNameValid}
					/>
					<InputSubscription subscriptionValue={subscription} setSubscription={setSubscription} />

				</div>

				<div className="registration__section">
					<SectionTitle>Визначте графік відвідувань</SectionTitle>

					<Schedule schedule={schedule} setSchedule={setSchedule} />

				</div>

				<div className="registration__sumbit-btn">
					<SubmitButton onSubmit={onSubmitHandler}>Зареэструвати</SubmitButton>

					<Toaster position="bottom-center" richColors />

				</div>

			</form>

		</PageContainer>
	)
}
