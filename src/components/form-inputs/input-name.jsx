import React, { forwardRef, useState } from "react";
import './form-inputs.less';
import { InputWrapper } from "./input-wrapper.jsx";

export const InputName = forwardRef(({ startValue = '', onInputChange }, ref) => {
	const [inputValue, setInputValue] = useState(startValue);

	function onChange(e) {
		setInputValue(e.target.value);
	}

	return (
		<InputWrapper>
			<label className='input-wrapper__name-label'>
				ПІБ
				<input ref={ref}
					type="text" name="name"
					value={inputValue} placeholder='______'
					onChange={onChange}
				/>
			</label>
		</InputWrapper>
	)
});