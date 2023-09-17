import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const visitorStore = immer((set, get) => ({
	visitors: [
		{
			id: 0,
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
			id: 1,
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
			id: 2,
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
			id: 3,
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
			id: 4,
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