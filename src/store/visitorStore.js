import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const visitorStore = immer((set, get) => ({
	visitors: [
		{
			id: 0,
			name: "Головкин Тихон",
			subscription: 10,
			schedule: [
				{
					date: 1,
					weekday: { short: "Пн", full: "Понеділок" },
					isActive: true,
					time: '12:00',
				},
				{
					date: 2,
					weekday: { short: "Вт", full: "Вівторок" },
					isActive: false,
					time: '12:00',
				},
				{
					date: 3,
					weekday: { short: "Ср", full: "Середа" },
					isActive: true,
					time: '13:30',
				},
				{
					date: 4,
					weekday: { short: "Чт", full: "Четвер" },
					isActive: false,
					time: '12:00',
				},
				{
					date: 5,
					weekday: { short: "Пт", full: "П'ятниця" },
					isActive: true,
					time: '15:00',
				},
				{
					date: 6,
					weekday: { short: "Сб", full: "Субота" },
					isActive: false,
					time: '12:00',
				},
			]
		},
		{
			id: 1,
			name: "Метальников Тарасий",
			subscription: 3,
			schedule: [
				{
					date: 1,
					weekday: { short: "Пн", full: "Понеділок" },
					isActive: true,
					time: '13:00',
				},
				{
					date: 2,
					weekday: { short: "Вт", full: "Вівторок" },
					isActive: false,
					time: '12:00',
				},
				{
					date: 3,
					weekday: { short: "Ср", full: "Середа" },
					isActive: true,
					time: '12:00',
				},
				{
					date: 4,
					weekday: { short: "Чт", full: "Четвер" },
					isActive: false,
					time: '12:00',
				},
				{
					date: 5,
					weekday: { short: "Пт", full: "П'ятниця" },
					isActive: true,
					time: '15:00',
				},
				{
					date: 6,
					weekday: { short: "Сб", full: "Субота" },
					isActive: false,
					time: '12:00',
				},
			]
		},
		{
			id: 2,
			name: "Сологубов Иакинф",
			subscription: 0,
			schedule: [
				{
					date: 1,
					weekday: { short: "Пн", full: "Понеділок" },
					isActive: true,
					time: '12:00',
				},
				{
					date: 2,
					weekday: { short: "Вт", full: "Вівторок" },
					isActive: false,
					time: '12:00',
				},
				{
					date: 3,
					weekday: { short: "Ср", full: "Середа" },
					isActive: true,
					time: '13:30',
				},
				{
					date: 4,
					weekday: { short: "Чт", full: "Четвер" },
					isActive: false,
					time: '12:00',
				},
				{
					date: 5,
					weekday: { short: "Пт", full: "П'ятниця" },
					isActive: true,
					time: '12:00',
				},
				{
					date: 6,
					weekday: { short: "Сб", full: "Субота" },
					isActive: false,
					time: '12:00',
				},
			]
		},
		{
			id: 3,
			name: "Блинова Георгина",
			subscription: 2,
			schedule: [
				{
					date: 1,
					weekday: { short: "Пн", full: "Понеділок" },
					isActive: true,
					time: '13:00',
				},
				{
					date: 2,
					weekday: { short: "Вт", full: "Вівторок" },
					isActive: false,
					time: '12:00',
				},
				{
					date: 3,
					weekday: { short: "Ср", full: "Середа" },
					isActive: true,
					time: '12:00',
				},
				{
					date: 4,
					weekday: { short: "Чт", full: "Четвер" },
					isActive: false,
					time: '12:00',
				},
				{
					date: 5,
					weekday: { short: "Пт", full: "П'ятниця" },
					isActive: true,
					time: '13:30',
				},
				{
					date: 6,
					weekday: { short: "Сб", full: "Субота" },
					isActive: false,
					time: '12:00',
				},
			]
		},
		{
			id: 4,
			name: "Облеухова Ада",
			subscription: 5,
			schedule: [
				{
					date: 1,
					weekday: { short: "Пн", full: "Понеділок" },
					isActive: true,
					time: '12:00',
				},
				{
					date: 2,
					weekday: { short: "Вт", full: "Вівторок" },
					isActive: false,
					time: '12:00',
				},
				{
					date: 3,
					weekday: { short: "Ср", full: "Середа" },
					isActive: true,
					time: '13:30',
				},
				{
					date: 4,
					weekday: { short: "Чт", full: "Четвер" },
					isActive: false,
					time: '12:00',
				},
				{
					date: 5,
					weekday: { short: "Пт", full: "П'ятниця" },
					isActive: true,
					time: '15:00',
				},
				{
					date: 6,
					weekday: { short: "Сб", full: "Субота" },
					isActive: false,
					time: '12:00',
				},
			]
		},
		{
			id: 5,
			name: "Люшин Феликс",
			subscription: 4,
			schedule: [
				{
					date: 1,
					weekday: { short: "Пн", full: "Понеділок" },
					isActive: true,
					time: '13:00',
				},
				{
					date: 2,
					weekday: { short: "Вт", full: "Вівторок" },
					isActive: false,
					time: '12:00',
				},
				{
					date: 3,
					weekday: { short: "Ср", full: "Середа" },
					isActive: true,
					time: '12:00',
				},
				{
					date: 4,
					weekday: { short: "Чт", full: "Четвер" },
					isActive: false,
					time: '12:00',
				},
				{
					date: 5,
					weekday: { short: "Пт", full: "П'ятниця" },
					isActive: true,
					time: '12:00',
				},
				{
					date: 6,
					weekday: { short: "Сб", full: "Субота" },
					isActive: false,
					time: '12:00',
				},
			]
		},
		{
			id: 6,
			name: "Чернопятов Харалампий",
			subscription: 2,
			schedule: [
				{
					date: 1,
					weekday: { short: "Пн", full: "Понеділок" },
					isActive: true,
					time: '12:00',
				},
				{
					date: 2,
					weekday: { short: "Вт", full: "Вівторок" },
					isActive: true,
					time: '13:00',
				},
				{
					date: 3,
					weekday: { short: "Ср", full: "Середа" },
					isActive: true,
					time: '12:00',
				},
				{
					date: 4,
					weekday: { short: "Чт", full: "Четвер" },
					isActive: true,
					time: '12:00',
				},
				{
					date: 5,
					weekday: { short: "Пт", full: "П'ятниця" },
					isActive: true,
					time: '15:00',
				},
				{
					date: 6,
					weekday: { short: "Сб", full: "Субота" },
					isActive: true,
					time: '12:00',
				},
			]
		},
		{
			id: 7,
			name: "Єблантій XV",
			subscription: 5,
			schedule: [
				{
					date: 1,
					weekday: { short: "Пн", full: "Понеділок" },
					isActive: false,
					time: '12:00',
				},
				{
					date: 2,
					weekday: { short: "Вт", full: "Вівторок" },
					isActive: false,
					time: '13:00',
				},
				{
					date: 3,
					weekday: { short: "Ср", full: "Середа" },
					isActive: false,
					time: '12:00',
				},
				{
					date: 4,
					weekday: { short: "Чт", full: "Четвер" },
					isActive: false,
					time: '12:00',
				},
				{
					date: 5,
					weekday: { short: "Пт", full: "П'ятниця" },
					isActive: false,
					time: '15:00',
				},
				{
					date: 6,
					weekday: { short: "Сб", full: "Субота" },
					isActive: false,
					time: '12:00',
				},
			]
		},
	],

	setSubscription: (n) => {
		set((state) => { state.visitors[0].subscription = n });
	},
}));

export const useVisitorsStore = create(visitorStore);