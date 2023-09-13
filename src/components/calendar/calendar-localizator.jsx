import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

export function CalendarLocalizator({ children }) {
	return (
		<LocalizationProvider
			dateAdapter={AdapterMoment}
			adapterLocale='uk'
		>
			{children}
		</LocalizationProvider>
	)
}