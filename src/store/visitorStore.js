import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';

const visitorStore = persist(immer((set, get) => ({
	idCounter: 1,
	incrementIdCounter: () => set((state) => { state.idCounter++ }),

	visitors: [],

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
	hoursArr: [
		'12:00', '12:30',
		'13:00', '13:30',
		'14:00', '14:30',
		'15:00', '15:30',
		'16:00', '16:30',
		'17:00', '17:30',
		'18:00', '18:30',
	],


	todayDate: null,
	setTodayDate: (dateObj) => {
		set(state => { state.todayDate = dateObj });
	},

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
})),
	{
		name: 'visitors store',
		partialize: (state) =>
			Object.fromEntries(
				Object.entries(state).filter(([key]) => !['scheduleTemplate'].includes(key))
			),
	}
);

export const useVisitorsStore = create(visitorStore);