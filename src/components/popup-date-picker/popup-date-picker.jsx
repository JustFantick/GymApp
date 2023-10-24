import React, { useEffect } from 'react';
import './popup-date-picker.less';
import { motion } from 'framer-motion';
import { StaticDatePicker } from '@mui/x-date-pickers';
import { CalendarLocalizator } from '../calendar/calendar-localizator.jsx';
import { useScrollLock } from '../../hooks/useScrollLock.jsx';

export default function PopupDatePicker({ isOpen, closePopup, dateValue, setDate }) {
	const { lockScroll, unlockScroll } = useScrollLock();

	useEffect(() => {
		if (isOpen) {
			lockScroll();
		} else {
			unlockScroll();
		}
	}, [isOpen]);

	function outBodyClickHandler(e) {
		if (!e.target.closest('.popup-date-picker__body')) closePopup();
	}

	function onDateChange(date) {
		setDate(date);
		setTimeout(closePopup, 450);
	}

	return (
		<motion.div
			className="popup-date-picker"
			data-isopen={isOpen} layout
			onClick={outBodyClickHandler}
		>
			<motion.div
				className="popup-date-picker__body"
				variants={{
					closed: { scale: 0, opacity: 0, transition: { type: 'spring', duration: 1 } },
					open: { scale: 1, opacity: 1, transition: { type: 'spring', duration: 0.5 } }
				}}
				animate={isOpen ? "open" : "closed"}
			>
				<CalendarLocalizator>
					<StaticDatePicker
						value={dateValue}
						onChange={newDate => onDateChange(newDate)}
						views={['day']}
					/>
				</CalendarLocalizator>

			</motion.div>

		</motion.div>
	)
}
