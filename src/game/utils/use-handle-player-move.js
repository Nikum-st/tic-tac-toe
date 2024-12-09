import { store } from "../store/store";
import { useEffect, useState } from "react";
import checkWinner from "./check-winners";
import checkDraw from "./check-draw";

export default function useHandlePlayerMove() {
	const [state, setState] = useState(store.getState());

	const { isGameEnded, field, currentPlayer } = state;

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => unsubscribe();
	}, []);

	const handlePlayerMove = (index) => {
		if (isGameEnded || field[index].value) return;

		const newField = field.map((c, i) => {
			if (i === index && c.value === "") {
				return { ...c, value: currentPlayer };
			}
			return c;
		});

		if (checkWinner(newField)) {
			store.dispatch({ type: "SET_FIELD", payload: newField });
			store.dispatch({ type: "SET_IS_GAME_ENDED", payload: true });
		} else if (checkDraw(newField)) {
			store.dispatch({ type: "SET_FIELD", payload: newField });
			store.dispatch({ type: "SET_IS_DRAW", payload: true });
			store.dispatch({ type: "SET_IS_GAME_ENDED", payload: true });
		} else {
			store.dispatch({ type: "SET_FIELD", payload: newField });
			store.dispatch({
				type: "SET_CURRENT_PLAYER",
				payload: currentPlayer === "X" ? "O" : "X",
			});
		}
	};
	return handlePlayerMove;
}
