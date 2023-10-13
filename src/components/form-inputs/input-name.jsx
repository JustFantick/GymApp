import React from "react";
import { InputWrapper } from "./input-wrapper.jsx";

export const InputName = ({ name = '', setName, label = '', isValid = true }) => {
	return (
		<InputWrapper isValid={isValid}>
			<label className="input-wrapper__name-label">
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