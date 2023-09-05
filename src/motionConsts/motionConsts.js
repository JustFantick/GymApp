const genAnimDuration = 0.5;

const headerTitleAnim = {
	disabled: {
		x: 0,
		opacity: 1,
		transition: {
			duration: genAnimDuration,
			type: "spring",
			delay: genAnimDuration / 2,//to show title after Navigation been closed
		}
	},
	enabled: {
		x: '-150%',
		opacity: 0,
		transition: {
			duration: genAnimDuration,
			type: "spring",
		},
	}
};

const navigationAnim = {
	disabled: {
		y: '-100%',
		transition: {
			duration: genAnimDuration,
			type: "spring",
			staggerChildren: 0.05,
			staggerDirection: -1,
		}
	},
	enabled: {
		y: 0,
		transition: {
			duration: genAnimDuration,
			type: "spring",
			staggerChildren: 0.07,
			delayChildren: 0.2
		}
	}
}

const navigationItemAnim = {
	disabled: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
			duration: 0.5,
		}
	},
	enabled: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
			duration: 0.5,
		}
	}
};

const burgerAnim = {
	disabled: {
		rotate: 0,
		transition: {
			duration: genAnimDuration,
			type: "spring",
		}
	},
	enabled: {
		rotate: -90,
		transition: {
			duration: genAnimDuration,
			type: "spring",
		}
	}
}

const burgerLineAnim = {
	disabled: {
		width: '100%',
		transition: {
			duration: genAnimDuration,
			type: "spring",
		}
	},
	enabled: widthValue => ({
		width: widthValue,
		transition: {
			duration: genAnimDuration,
			type: "spring",
		}
	})
};

export { genAnimDuration, headerTitleAnim, navigationAnim, navigationItemAnim, burgerAnim, burgerLineAnim };