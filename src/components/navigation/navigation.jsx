import React, { forwardRef, ref } from 'react';
import { motion } from 'framer-motion';
import './navigation.less';

import { navigationItemAnim } from '../../motionConsts/motionConsts';
const navItems = [
	{ text: 'Головна ', isCurrent: true },
	{ text: 'Відвідувачі ', isCurrent: false },
	{ text: 'Реєстрація ', isCurrent: false },
	{ text: 'Календар ', isCurrent: false }
];

export const Navigation = forwardRef((props, ref) => {
	return (
		<nav className="header-body__nav nav" ref={ref}>
			{
				navItems.map((item, id) => (
					<motion.div className="nav__item" key={id}
						data-iscurrent={item.isCurrent}
						variants={navigationItemAnim}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						{item.text}
					</motion.div>
				))
			}
		</nav>
	)
});

export const MotionNavigation = motion(Navigation);
