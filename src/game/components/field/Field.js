import { useState } from "react";
import { store } from "../../store/store";
import FieldLayout from "./FieldLayout";
import PropTypes from "prop-types";

export default function Field({ checkWinner, checkDraw }) {
	const [state, setState] = useState(store.getState());
	const { isGameEnded, field, currentPlayer } = state;

	const onClick = (index) => {
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
		setState(store.getState());
	};

	return <FieldLayout onClick={onClick} />;
}

Field.propTypes = {
	currentPlayer: PropTypes.string,
	checkDraw: PropTypes.func,
	checkWinner: PropTypes.func,
	setField: PropTypes.func,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	field: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			value: PropTypes.string,
		}),
	),
};
