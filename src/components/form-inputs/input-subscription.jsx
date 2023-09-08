import React, { forwardRef, useState } from "react";
import './form-inputs.less';
import { InputWrapper } from "./input-wrapper.jsx";
import QuickIncreaseButton from '../quick-increase-btn/quick-increase-btn.jsx';

export const InputSubscription = forwardRef(({ startValue = 0, onInputChange }, ref) => {
	const [inputValue, setInputValue] = useState(startValue);

	function onChange(e) {
		setInputValue(e.target.value);
	}

	function increaseInputValue(n) {
		setInputValue(inputValue + n);
	}

	return (
		<InputWrapper>
			<div className="subscription">
				<label className="subscription__label">
					Стартовий абонемент:
					<input type="number" name="subscriptionCounter" value={inputValue} onChange={onChange} />
				</label>
				<div className="subscription__increase-btns">
					{
						[1, 2, 3, 4].map(number => (
							<QuickIncreaseButton key={number} coefficient={number} onClick={() => increaseInputValue(number)} />
						))
					}

					<QuickIncreaseButton coefficient={"n"} onClick={() => increaseInputValue(-1)} />
				</div>

			</div>
		</InputWrapper>
	)
});