import React from 'react';
import './submit-button.less';
import { motion } from 'framer-motion';

export default function SubmitButton({ children, onSubmit }) {
	function onClickHandler(e) {
		e.preventDefault();
		onSubmit();
	}
	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.9 }}
			transition={{
				duration: 0.5,
				type: "spring",
			}}
			className='submit-btn'
			onClick={onClickHandler}
		>
			{children}
		</motion.button>
	)
}
