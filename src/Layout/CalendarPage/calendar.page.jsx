import React from 'react';
import './calendar.page.less';
import PageContainer from '../../components/page-container/page-container.jsx';
import Calendar from '../../components/calendar/calendar.jsx';

export default function CalendarPage() {
	return (
		<div className="calendar-page">
			<div className="calendar-page__calendar">
				<Calendar />
			</div>

			<PageContainer>
				<div className="calendar-page__visitors-list">
					Visitors List
				</div>
			</PageContainer>

		</div>
	)
}
