import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const visitorStore = immer((set, get) => ({
	visitors: [
		{
			name: "Lorem ipsum",
			subscription: 10,
			schedule: [
				{
					weekdayName: 'Mon',
					isActive: true,
					specifiedTime: '12:00',
				},
				{
					weekdayName: 'Tue',
					isActive: false,
					specifiedTime: '',
				},
				{
					weekdayName: 'Wed',
					isActive: true,
					specifiedTime: '13:30',
				},
				{
					weekdayName: 'Thu',
					isActive: false,
					specifiedTime: '',
				},
				{
					weekdayName: 'Fri',
					isActive: true,
					specifiedTime: '15:00',
				},
				{
					weekdayName: 'Sat',
					isActive: false,
					specifiedTime: '',
				},
			]
		},
		{
			name: "Lorem ipsum dolor",
			subscription: 3,
			schedule: [
				{
					weekdayName: 'Mon',
					isActive: false,
					specifiedTime: '',
				},
				{
					weekdayName: 'Tue',
					isActive: false,
					specifiedTime: '',
				},
				{
					weekdayName: 'Wed',
					isActive: true,
					specifiedTime: '13:30',
				},
				{
					weekdayName: 'Thu',
					isActive: false,
					specifiedTime: '',
				},
				{
					weekdayName: 'Fri',
					isActive: true,
					specifiedTime: '15:00',
				},
				{
					weekdayName: 'Sat',
					isActive: false,
					specifiedTime: '',
				},
			]
		},
		{
			name: "Lorem ipsum emet",
			subscription: 0,
			schedule: [
				{
					weekdayName: 'Mon',
					isActive: true,
					specifiedTime: '12:00',
				},
				{
					weekdayName: 'Tue',
					isActive: false,
					specifiedTime: '',
				},
				{
					weekdayName: 'Wed',
					isActive: true,
					specifiedTime: '13:30',
				},
				{
					weekdayName: 'Thu',
					isActive: false,
					specifiedTime: '',
				},
				{
					weekdayName: 'Fri',
					isActive: true,
					specifiedTime: '15:00',
				},
				{
					weekdayName: 'Sat',
					isActive: false,
					specifiedTime: '',
				},
			]
		},
		{
			name: "Lorem ipsum",
			subscription: 2,
			schedule: [
				{
					weekdayName: 'Mon',
					isActive: true,
					specifiedTime: '13:00',
				},
				{
					weekdayName: 'Tue',
					isActive: false,
					specifiedTime: '',
				},
				{
					weekdayName: 'Wed',
					isActive: true,
					specifiedTime: '15:30',
				},
				{
					weekdayName: 'Thu',
					isActive: false,
					specifiedTime: '',
				},
				{
					weekdayName: 'Fri',
					isActive: true,
					specifiedTime: '12:00',
				},
				{
					weekdayName: 'Sat',
					isActive: false,
					specifiedTime: '',
				},
			]
		},
		{
			name: "Lorem ipsum new",
			subscription: 5,
			schedule: [
				{
					weekdayName: 'Mon',
					isActive: true,
					specifiedTime: '13:00',
				},
				{
					weekdayName: 'Tue',
					isActive: false,
					specifiedTime: '',
				},
				{
					weekdayName: 'Wed',
					isActive: true,
					specifiedTime: '13:00',
				},
				{
					weekdayName: 'Thu',
					isActive: false,
					specifiedTime: '',
				},
				{
					weekdayName: 'Fri',
					isActive: true,
					specifiedTime: '13:00',
				},
				{
					weekdayName: 'Sat',
					isActive: false,
					specifiedTime: '',
				},
			]
		},
	],

	setSubscription: (n) => {
		set((state) => { state.visitors[0].subscription = n });
	},
}));

export const useVisitorsStore = create(visitorStore);