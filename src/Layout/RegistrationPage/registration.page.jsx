import React, { useRef } from 'react';
import './registration.page.less';
import PageContainer from '../../components/page-container/page-container.jsx';
import { SectionTitle } from '../../components/section-title/section-title.jsx';
import { InputName } from '../../components/form-inputs/input-name.jsx';
import { InputSubscription } from '../../components/form-inputs/input-subscription.jsx';

export default function RegistrationPage() {
	const nameRef = useRef(null);
	const subscriptionRef = useRef(null);

	return (
		<PageContainer>
			<form className='registration'>
				<div className="registration__section">
					<SectionTitle>Заповніть поля вводу</SectionTitle>

					<InputName ref={nameRef} />
					<InputSubscription ref={subscriptionRef} />
				</div>

				<div className="registration__section">
					<SectionTitle>Визначте графік відвідувань</SectionTitle>

				</div>

			</form>
		</PageContainer>
	)
}
