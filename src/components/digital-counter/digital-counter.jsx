import React from 'react';
import './digital-counter.less';

export default function DigitalCounter({ value, setValue }) {
	return (
		<div className="digital-counter">
			<div className="digital-counter__minus" onClick={() => setValue(value - 1)}>-</div>

			<div className="digital-counter__value">
				{value}
			</div>

			<div className="digital-counter__plus" onClick={() => setValue(value + 1)}>+</div>

		</div>
	)
}
