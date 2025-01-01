import { initialState } from "../utils/date/initial-state";

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case "UPDATE_FIELD": {
			return { ...state, ...payload };
		}
		case "SET_DRAW": {
			return { ...state, ...payload };
		}
		case "SET_GAME_ENDED": {
			return { ...state, ...payload };
		}
		case "SET_INITIAL_STATE": {
			return initialState;
		}
		default: {
			return state;
		}
	}
};
