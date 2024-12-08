import InfoLayout from "./InformationLayout";
import PropTypes from "prop-types";
import { store } from "../../store/store";

export default function Info() {
	const { isDraw, isGameEnded, currentPlayer } = store.getState();

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
