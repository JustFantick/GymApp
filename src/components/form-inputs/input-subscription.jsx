import React, { forwardRef } from "react";
import './form-inputs.less';
import { InputWrapper } from "./input-wrapper.jsx";
import QuickIncreaseButton from '../quick-increase-btn/quick-increase-btn.jsx';

export const InputSubscription = forwardRef(({ value, setValue, openPopup }, ref) => {
	function inputOnClick(e) {
		e.preventDefault();
		openPopup();
	}

	return (
		<InputWrapper>
			<div className="subscription">
				<div className="subscription__label" onClick={inputOnClick}>
					Стартовий абонемент:<span>{value}</span>
				</div>

				<div className="subscription__increase-btns">
					{
						[1, 2, 3, 4].map(number => (
							<QuickIncreaseButton key={number}
								coefficient={number}
								onClick={() => setValue(value + number)}
							/>
						))
					}

					<QuickIncreaseButton coefficient={"n"} onClick={openPopup} />
				</div>

			</div>
		</InputWrapper>
	)
});