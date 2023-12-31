import React from "react";
import { InputWrapper } from "./input-wrapper.jsx";

export const InputName = ({ name = '', setName, label = '', isValid = true }) => {
	function onKeyDown(e) {
		if (e.key === 'Enter') e.target.blur();
	}

	return (
		<InputWrapper isValid={isValid}>
			<label className="input-wrapper__name-label">
				{label}
				<input
					type="text" name="name"
					value={name} placeholder='______'
					onChange={(e) => setName(e.target.value)}
					onKeyDown={onKeyDown}
				/>
			</label>
		</InputWrapper>
	)
};