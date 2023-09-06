import React from 'react';
import { motion } from 'framer-motion';
import './quick-increase-btn.less';

export default function QuickIncreaseButton({ coefficient, onClick, theme = 'green' }) {
	return (
		<motion.div className={`quick-increase-button ${theme === 'green' ? '' : 'yellow'}`}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			onClick={onClick}
		>
			{`+${coefficient}`}
		</motion.div>
	)
}
