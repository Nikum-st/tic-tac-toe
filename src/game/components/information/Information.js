import InfoLayout from "./InformationLayout";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import { useState, useEffect } from "react";

export default function Info() {
	const [state, setState] = useState(store.getState());

	const { isDraw, isGameEnded, currentPlayer } = state;
	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => unsubscribe();
	}, []);

	const message = isDraw
		? "Ничья!"
		: isGameEnded
			? `Игра окончена! Игрок ${currentPlayer} выиграл`
			: `Настала очередь ${currentPlayer}`;

	const playerColor = (styles) =>
		currentPlayer === "X" ? styles.x : styles.o;

	return <InfoLayout message={message} playerColor={playerColor} />;
}

Info.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};
