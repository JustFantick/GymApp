import React, { useState } from 'react';
import './popup-container.less';
import { motion } from 'framer-motion';

export default function PopupContainer({ children, isOpen, setIsOpen }) {
	return (
		<motion.div className='popup'
			onClick={() => setIsOpen(!isOpen)}
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
