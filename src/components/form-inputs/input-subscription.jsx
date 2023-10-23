import React, { useState, lazy, Suspense } from "react";
import { InputWrapper } from "./input-wrapper.jsx";
import QuickIncreaseButton from '../quick-increase-btn/quick-increase-btn.jsx';
const PopupContainer = lazy(() => import('../popup-container/popup-container.jsx'));
const DigitalCounter = lazy(() => import('../digital-counter/digital-counter.jsx'));

export const InputSubscription = ({ subscriptionValue, setSubscription }) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	function inputOnClick(e) {
		e.preventDefault();
		setIsPopupOpen(true);
	}

	return (
		<>
			<InputWrapper>
				<div className="subscription">
					<div className="subscription__label" onClick={inputOnClick}>
						Стартовий абонемент:<span>{subscriptionValue}</span>
					</div>

					<div className="subscription__increase-btns">
						{
							[1, 2, 3, 4].map(number => (
								<QuickIncreaseButton key={number}
									coefficient={number}
									onClick={() => setSubscription(subscriptionValue + number)}
								/>
							))
						}

						<QuickIncreaseButton coefficient={"n"} onClick={() => setIsPopupOpen(true)} />
					</div>

				</div>
			</InputWrapper>

			<Suspense>
				<PopupContainer isOpen={isPopupOpen} closePopup={setIsPopupOpen}>
					<div style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
						<DigitalCounter value={subscriptionValue} setValue={setSubscription} />
					</div>
				</PopupContainer>

			</Suspense>
		</>
	)
};