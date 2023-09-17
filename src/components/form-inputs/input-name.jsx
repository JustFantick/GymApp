import React from "react";
import './form-inputs.less';
import { InputWrapper } from "./input-wrapper.jsx";

export const InputName = ({ name = '', setName, label = 'ПІБ', isValid = true }) => {
	return (
		<InputWrapper>
			<label className={`input-wrapper__name-label ${isValid ? 'valid' : 'non-valid'}`}>
				{label}
				<input
					type="text" name="name"
					value={name} placeholder='______'
					onChange={(e) => setName(e.target.value)}
				/>
			</label>
		</InputWrapper>
	)
};