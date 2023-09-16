import React, { useState } from 'react';
import PopupContainer from '../popup-container/popup-container.jsx';
import SearchField from '../search-field/search-field.jsx';
import VisitorCart from '../visitor-cart/visitor-cart.jsx';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function PopupAddVisitor({ addVisitorFunc, visitorsList, isOpen, closePopup }) {
	const [searchValue, setSearchValue] = useState('');
	const [listRef] = useAutoAnimate();

	return (
		<PopupContainer isOpen={isOpen} closePopup={closePopup}>
			<div className="add-visitor-popup"
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '20px',
				}}
			>
				<div className="add-visitor-popup__search-field">
					<SearchField theme='white' value={searchValue} setValue={setSearchValue} />
				</div>

				<div
					className="add-visitor-popup__visitors-list flex-gap"
					ref={listRef}
					style={{ overflowY: 'scroll' }}
				>
					{visitorsList.filter((li) => {
						return searchValue.toLowerCase() === '' ?
							li :
							li.name.toLowerCase().includes(searchValue.toLowerCase());
					}).map((li, id) => (
						<VisitorCart key={id}
							name={li.name}
							subscriptionCounter={li.subscription}
							showSubscriptionCounter={false}
							theme='light'
							preventNavLink={true}
							onClick={() => addVisitorFunc(li.name)}
						/>
					))}
				</div>

			</div>

		</PopupContainer >
	)
}
