import { initialState } from "../utils/date/initial-state";

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
		case "SET_INITIAL_STATE": {
			return initialState;
		}
		default: {
			return state;
		}
	}
};
