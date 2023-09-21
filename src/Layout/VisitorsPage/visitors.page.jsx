import React, { useState } from 'react';
import './visitors.page.less';
import SearchField from '../../components/search-field/search-field.jsx';
import VisitorCart from '../../components/visitor-cart/visitor-cart.jsx';
import { useVisitorsStore } from '../../store/visitorStore';
import PageContainer from '../../components/page-container/page-container.jsx';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function VisitorsPage() {
	const visitorsList = useVisitorsStore(state => state.visitors);
	const [searchValue, setSearchValue] = useState('');
	const [listRef] = useAutoAnimate();

	return (
		<div className='visitors'>
			<SearchField value={searchValue} setValue={setSearchValue} />

			<PageContainer>
				<div className="visitors__list" ref={listRef}>
					{
						visitorsList.filter((li) => {
							return searchValue.toLowerCase() === '' ?
								li :
								li.name.toLowerCase().includes(searchValue.toLowerCase());
						}).map((li) => (
							<VisitorCart key={li.id}
								linkUrl={`/profile/${li.id}`}
								name={li.name}
								subscriptionCounter={li.subscription}
								showSubscriptionCounter={false}
							/>
						))
					}
				</div>
			</PageContainer>

		</div>
	)
}
