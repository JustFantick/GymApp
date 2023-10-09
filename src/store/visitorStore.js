import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const visitorStore = immer((set, get) => ({
	idCounter: 8,
	incrementIdCounter: () => set((state) => { state.idCounter++ }),

	visitors: [
		{
			id: 0,
			name: "Головкин Тихон",
			subscription: 1,
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
			subscription: 1,
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
	],

	setVisitorName: (id, name) => {
		const visitorObj = get().visitors.filter(v => v.id == id)[0];
		set((state) => {
			state.visitors[get().visitors.indexOf(visitorObj)].name = name
		});
	},

	setVisitorSubscription: (id, n) => {
		const visitorObj = get().visitors.filter(v => v.id == id)[0];
		set((state) => {
			state.visitors[get().visitors.indexOf(visitorObj)].subscription = n
		});
	},

	setVisitorSchedule: (id, scheduleObj) => {
		const visitorObj = get().visitors.filter(v => v.id == id)[0];
		set((state) => {
			state.visitors[get().visitors.indexOf(visitorObj)].schedule = scheduleObj
		});
	},

	addNewVisitor: (name, subscription, schedule) => {
		set((state) => {
			state.visitors.push({
				id: get().idCounter,
				name: name,
				subscription: subscription,
				schedule: schedule,
			})
		});
		get().incrementIdCounter();
	},

	scheduleTemplate: [
		{
			date: 1,
			weekday: { short: "Пн", full: "Понеділок" },
			isActive: false,
			time: "12:00",
		},
		{
			date: 2,
			weekday: { short: "Вт", full: "Вівторок" },
			isActive: false,
			time: "12:00",
		},
		{
			date: 3,
			weekday: { short: "Ср", full: "Середа" },
			isActive: false,
			time: "12:00",
		},
		{
			date: 4,
			weekday: { short: "Чт", full: "Четвер" },
			isActive: false,
			time: "12:00",
		},
		{
			date: 5,
			weekday: { short: "Пт", full: "П'ятниця" },
			isActive: false,
			time: "12:00",
		},
		{
			date: 6,
			weekday: { short: "Сб", full: "Субота" },
			isActive: false,
			time: "12:00",
		},
	],


	todaysVisitors: [],
	setTodaysVisitors: (visitorsArray) => {
		set((state) => {
			state.todaysVisitors = visitorsArray;
		});
	},
	switchTodaysVisitorAttendance: (visitorId) => {
		const visitorObj = get().todaysVisitors.filter(v => v.id == visitorId)[0];
		const visitorIndex = get().todaysVisitors.indexOf(visitorObj);
		set((state) => {
			state.todaysVisitors[visitorIndex].isCame = !state.todaysVisitors[visitorIndex].isCame
		});
	},
	addTodaysVisitor: (visitorObj) => {
		set((state) => {
			state.todaysVisitors.push(visitorObj);
		});
	},
}));

export const useVisitorsStore = create(visitorStore);