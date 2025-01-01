import checkWinner from "./check-winners";
import checkDraw from "./check-draw";

const handlePlayerMove = (index) => (dispatch, getState) => {
	const { isGameEnded, field, currentPlayer } = getState();

	if (isGameEnded || field[index].value) return;

	const newField = field.map((c, i) => {
		if (i === index && c.value === "") {
			return { ...c, value: currentPlayer };
		}
		return c;
	});

	if (checkWinner(newField)) {
		dispatch({
			type: "SET_GAME_ENDED",
			payload: { field: newField, isGameEnded: true },
		});
	} else if (checkDraw(newField)) {
		dispatch({
			type: "SET_DRAW",
			payload: { field: newField, isDraw: true, isGameEnded: true },
		});
	} else {
		dispatch({
			type: "UPDATE_FIELD",
			payload: {
				field: newField,
				currentPlayer: currentPlayer === "X" ? "O" : "X",
			},
		});
	}
};

export default handlePlayerMove;
