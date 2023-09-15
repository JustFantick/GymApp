import React from "react";
import './form-inputs.less';
import { InputWrapper } from "./input-wrapper.jsx";

export const InputName = ({ name = '', setName }) => {
	return (
		<InputWrapper>
			<label className='input-wrapper__name-label'>
				ПІБ
				<input
					type="text" name="name"
					value={name} placeholder='______'
					onChange={(e) => setName(e.target.value)}
				/>
			</label>
		</InputWrapper>
	)
};