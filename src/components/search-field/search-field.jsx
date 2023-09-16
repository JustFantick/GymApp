import React from 'react';
import './search-field.less';
import searchIcon from "../../img/search-ico.svg";

export default function SearchField(
	{ theme = 'green', value = '', setValue }
) {
	return (
		<label className={`search-field ${theme}`}>
			<div className="search-field__icon">
				<img src={searchIcon} alt="search-icon.svg" />
			</div>
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="search-field__input"
				type="search" name='find-visitor'
				placeholder='Кого шукаємо?'
			/>
		</label>
	)
}
