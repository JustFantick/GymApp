import React from 'react';
import './popup-container.less';
import { motion } from 'framer-motion';

export default function PopupContainer({ children, isOpen, closePopup }) {
	function bodyClickHandler(e) {
		if (!e.target.closest('.popup__body')) {
			closePopup();
		}
	}
	return (
		<motion.div className='popup'
			onClick={bodyClickHandler}
			data-isopen={isOpen} layout
		>
			<motion.div className="popup__body"
				variants={{
					closed: { y: '100%' },
					open: { y: 0 }
				}}
				animate={isOpen ? "open" : "closed"}
			>
				{children}
			</motion.div>

		</ motion.div>
	)
}
