import React, { useEffect, useRef, useState } from 'react';
import './popup-add-visitor.less';
import PopupContainer from '../popup-container/popup-container.jsx';
import SearchField from '../search-field/search-field.jsx';
import { VisitorCart } from '../visitor-cart/visitor-cart.jsx';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import ClockComponent from '../clock-component/clock-component.jsx';

import { AnimatePresence, motion } from 'framer-motion';
import { useVisitorsStore } from '../../store/visitorStore.js';

export default function PopupAddVisitor({
	isOpen, closePopup, addVisitorFunc,
}) {
	const [searchValue, setSearchValue] = useState('');
	const [listRef] = useAutoAnimate();

	const visitorsList = useVisitorsStore(state => state.visitors);
	const todaysVisitors = useVisitorsStore(state => state.todaysVisitors);

	const [visitorsToRender, setVisitorsToRender] = useState([]);

	useEffect(() => {
		setVisitorsToRender(visitorsList.filter(li => todaysVisitors.map(el => el.id).indexOf(li.id) == -1));
	}, [todaysVisitors]);

	const [hour, setHour] = useState('12:00');

	function setTime(newTimeValue) {
		setHour(newTimeValue);
		setTimeout(() => {
			setSlideIndex(slideIndex + 1);
		}, 500);
	}

	function addVisitorHandler(li) {
		addVisitorFunc({ ...li, time: hour });
		closePopupHandler();
	}

	function closePopupHandler() {
		closePopup();
		setTimeout(() => {
			setSearchValue('');
			setHour('12:00');
			setSlideIndex(0);
		}, 500);
	}

	const [clockComponentRef, chooseVisitorRef] = [useRef(null), useRef(null)];

	const [slideIndex, setSlideIndex] = useState(0);
	const slides = [
		{
			refObj: clockComponentRef,
			block:
				<div ref={clockComponentRef} className='clock-slide'>
					<div className="clock-slide__header">
						<h4>Оберіть час</h4>
						<span onClick={() => setSlideIndex(slideIndex + 1)}></span>
					</div>

					<ClockComponent
						hour={hour}
						setTime={setTime}
					/>

				</div>,
		},
		{
			refObj: chooseVisitorRef,
			block:
				<div className="add-visitor-slide" ref={chooseVisitorRef}>
					<div
						className="add-visitor-slide__visitors-list"
						ref={listRef}
					>
						{
							visitorsToRender.filter((li) => {
								return searchValue.toLowerCase() === '' ?
									li :
									li.name.toLowerCase().includes(searchValue.toLowerCase());
							}).map(li => (
								<VisitorCart key={li.id}
									name={li.name}
									subscriptionCounter={li.subscription}
									theme='light'
									onClick={() => addVisitorHandler(li)}
								/>
							))
						}

					</div>

					<div className="add-visitor-slide__search-field">
						<SearchField theme='white' value={searchValue} setValue={setSearchValue} />
					</div>

				</div>
		}
	]

	return (
		<PopupContainer isOpen={isOpen} closePopup={closePopupHandler}>
			<motion.div
				style={{ position: 'relative' }}
				animate={{
					height: slides[slideIndex].refObj.current && slides[slideIndex].refObj.current.clientHeight,
				}}
			>
				<AnimatePresence>
					<motion.div
						key={slideIndex}
						style={{
							position: 'absolute',
							bottom: 0,
							width: '100%',
							height: '100%',
						}}
						initial={{ x: '110%' }}
						animate={{ x: 0 }}
						exit={{ x: '-110%' }}
						transition={{ duration: 0.5, type: 'spring' }}
					>
						{slides[slideIndex].block}
					</motion.div>

				</AnimatePresence>

			</motion.div>

		</PopupContainer >
	)
}
