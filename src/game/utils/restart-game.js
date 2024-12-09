import { store } from "../store/store";

export default function restartGame() {
	store.dispatch({ type: "SET_CURRENT_PLAYER", payload: "X" });
	store.dispatch({ type: "SET_IS_GAME_ENDED", payload: false });
	store.dispatch({ type: "SET_IS_DRAW", payload: false });
	store.dispatch({
		type: "SET_FIELD",
		payload: [
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
	});
}
