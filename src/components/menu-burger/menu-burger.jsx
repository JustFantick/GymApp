import React, { useState, forwardRef, ref } from 'react';
import { motion } from 'framer-motion';
import './menu-burger.less';

import { burgerLineAnim } from '../../motionConsts/motionConsts';

export const MenuBurger = forwardRef((props, ref) => {
	return (
		<div className="menu-burger" ref={ref}>
			<motion.span className="menu-burger__topline"
				variants={burgerLineAnim} custom={'33.333%'}>
			</motion.span>

			<motion.span className="menu-burger__midline"
				variants={burgerLineAnim} custom={'66.666%'}>
			</motion.span>

			<motion.span className="menu-burger__botline"></motion.span>

		</div>
	);
});

export const MotionMenuBurger = motion(MenuBurger);
