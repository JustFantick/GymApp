import React from 'react';
import './visitors.page.less';
import SearchField from '../../components/search-field/search-field.jsx';
import VisitorCart from '../../components/visitor-cart/visitor-cart.jsx';
import { useVisitorsStore } from '../../store/store';
import PageContainer from '../../components/page-container/page-container.jsx';

export default function VisitorsPage() {
	const visitorsList = useVisitorsStore(state => state.visitors);

	return (
		<div className='visitors'>
			<SearchField></SearchField>

			<PageContainer>
				<div className="visitors__list">
					{
						visitorsList.map((li, id) => (
							<VisitorCart key={id} name={li.name} />
						))
					}
				</div>
			</PageContainer>

		</div>
	)
}
