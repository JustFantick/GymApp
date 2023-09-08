import React from 'react';
import './search-field.less';
import searchIcon from "../../img/search-ico.svg";

export default function SearchField() {
	return (
		<label className='search-field'>
			<div className="search-field__icon">
				<img src={searchIcon} alt="search-icon.svg" />
			</div>
			<input className="search-field__input" type="search" name='find-visitor' placeholder='Кого шукаємо?' />
		</label>
	)
}
