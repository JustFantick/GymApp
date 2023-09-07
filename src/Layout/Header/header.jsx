import React, { useEffect, useRef, useState } from 'react';
import './header.less';

import { motion } from 'framer-motion';
import { MotionMenuBurger } from '../../components/menu-burger/menu-burger.jsx';
import { MotionNavigation } from '../../components/navigation/navigation.jsx';
import { burgerAnim, headerTitleAnim, navigationAnim } from '../../motionConsts/motionConsts';

export default function Header() {
	const [menuStatus, setMenuStatus] = useState(false);
	const menuOnClick = () => setMenuStatus(!menuStatus);

	const headerBody = useRef(null);
	const headerContainer = useRef(null);
	useEffect(() => {
		headerContainer.current.style.height = headerBody.current.clientHeight + 'px';
	}, []);

	return (
		<header className='header' ref={headerContainer}>
			<motion.div className="header__body header-body" ref={headerBody}
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
