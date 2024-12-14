import checkWinner from "./check-winners";
import checkDraw from "./check-draw";
import { selectIsGameEnded, selectCurrentPlayer, selectField } from "../store";
import {
	setField,
	setIsDraw,
	setIsGameEnded,
	setCurrentPlayer,
} from "../store";
import { useDispatch, useSelector } from "react-redux";

export default function useHandlePlayerMove() {
	const isGameEnded = useSelector(selectIsGameEnded);
	const field = useSelector(selectField);
	const currentPlayer = useSelector(selectCurrentPlayer);

	const dispatch = useDispatch();

	const handlePlayerMove = (index) => {
		if (isGameEnded || field[index].value) return;

		const newField = field.map((c, i) => {
			if (i === index && c.value === "") {
				return { ...c, value: currentPlayer };
			}
			return c;
		});

		if (checkWinner(newField)) {
			dispatch(setField(newField));
			dispatch(setIsGameEnded(true));
		} else if (checkDraw(newField)) {
			dispatch(setField(newField));
			dispatch(setIsDraw(true));
			dispatch(setIsGameEnded(true));
		} else {
			dispatch(setField(newField));
			dispatch(setCurrentPlayer(currentPlayer === "X" ? "O" : "X"));
		}
	};
	return handlePlayerMove;
}
