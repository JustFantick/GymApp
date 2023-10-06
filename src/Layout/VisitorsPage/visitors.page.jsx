import React, { useState } from 'react';
import './visitors.page.less';
import SearchField from '../../components/search-field/search-field.jsx';
import VisitorCartLink from '../../components/visitor-cart/visitor-cart.jsx';
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
							<VisitorCartLink key={li.id}
								name={li.name}
								visitorId={li.id}
								subscriptionCounter={li.subscription}
							/>
						))
					}
				</div>
			</PageContainer>

		</div>
	)
}
