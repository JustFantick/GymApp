import React, { useEffect } from 'react';
import './popup-container.less';
import { motion } from 'framer-motion';
import { useScrollLock } from '../../Layout/useScrollLock.jsx';

export default function PopupContainer({ children, isOpen, closePopup }) {
	const { lockScroll, unlockScroll } = useScrollLock();

	useEffect(() => {
		if (isOpen) {
			lockScroll();
		} else {
			unlockScroll();
		}
	}, [isOpen]);

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
