import React, { useState } from 'react';
import './header.less';

import { motion } from 'framer-motion';
import { MotionMenuBurger } from '../menu-burger/menu-burger.jsx';
import { MotionNavigation } from '../navigation/navigation.jsx';
import { burgerAnim, headerTitleAnim, navigationAnim } from '../../motionConsts/motionConsts';

export default function Header() {
	const [menuStatus, setMenuStatus] = useState(false);
	const menuOnClick = () => setMenuStatus(!menuStatus);

	return (
		<header className='header'>
			<motion.div className="header__body header-body"
				onClick={menuOnClick}
				initial="disabled"
				animate={menuStatus ? "enabled" : "disabled"}
			>
				<div className="header-body__top-section">
					<motion.h1 className="header__title main-title" variants={headerTitleAnim}>
						Головна
					</motion.h1>

					<MotionMenuBurger variants={burgerAnim} />
				</div>

				<MotionNavigation variants={navigationAnim} />

			</motion.div>

		</header>
	)
}
