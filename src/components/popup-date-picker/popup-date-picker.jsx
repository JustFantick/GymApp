import React from 'react';
import './popup-date-picker.less';
import { motion } from 'framer-motion';

export default function PopupDatePicker({ isOpen, setDate, closePopup }) {
	return (
		<motion.div
			className="popup-date-picker"
			data-isopen={isOpen} layout
		>
			<motion.div
				className="popup-date-picker__body"
				onClick={closePopup}
				variants={{
					closed: { scale: 0 },
					open: { scale: 1 }
				}}
				transition={{ type: 'spring', duration: 0.5 }}
				animate={isOpen ? "open" : "closed"}
			>

			</motion.div>

		</motion.div>
	)
}
