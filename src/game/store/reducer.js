const initialState = {
	field: [
		{ id: 1, value: "" },
		{ id: 2, value: "" },
		{ id: 3, value: "" },
		{ id: 4, value: "" },
		{ id: 5, value: "" },
		{ id: 6, value: "" },
		{ id: 7, value: "" },
		{ id: 8, value: "" },
		{ id: 9, value: "" },
	],
	isDraw: false,
	isGameEnded: false,
	currentPlayer: "X",
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case "SET_FIELD": {
			return { ...state, field: payload };
		}
		case "SET_CURRENT_PLAYER": {
			return { ...state, currentPlayer: payload };
		}
		case "SET_IS_DRAW": {
			return { ...state, isDraw: payload };
		}
		case "SET_IS_GAME_ENDED": {
			return { ...state, isGameEnded: payload };
		}
		default: {
			return state;
		}
	}
};
