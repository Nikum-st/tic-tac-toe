import { GameLayout } from "./GameLayout";
import { useState } from "react";
import PropTypes, { bool } from "prop-types";

export default function Game() {
	const [currentPlayer, setCurrentPlayer] = useState("X");
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState([
		{ id: 1, value: "" },
		{ id: 2, value: "" },
		{ id: 3, value: "" },
		{ id: 4, value: "" },
		{ id: 5, value: "" },
		{ id: 6, value: "" },
		{ id: 7, value: "" },
		{ id: 8, value: "" },
		{ id: 9, value: "" },
	]);

	const checkDraw = (newField) => {
		return newField.every(({ value }) => value !== "");
	};

	const restartGame = () => {
		setCurrentPlayer("X");
		setIsGameEnded(false);
		setIsDraw(false);
		setField([
			{ id: 1, value: "" },
			{ id: 2, value: "" },
			{ id: 3, value: "" },
			{ id: 4, value: "" },
			{ id: 5, value: "" },
			{ id: 6, value: "" },
			{ id: 7, value: "" },
			{ id: 8, value: "" },
			{ id: 9, value: "" },
		]);
	};

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const checkWinner = (newField) => {
		return WIN_PATTERNS.some(([a, b, c]) => {
			return (
				newField[a].value &&
				newField[a].value === newField[b].value &&
				newField[b].value === newField[c].value
			);
		});
	};

	return (
		<GameLayout
			checkDraw={checkDraw}
			restartGame={restartGame}
			checkWinner={checkWinner}
			setField={setField}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			field={field}
		/>
	);
}
