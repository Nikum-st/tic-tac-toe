import InfoLayout from "./InformationLayout";
import PropTypes from "prop-types";

export default function Info({ isDraw, isGameEnded, currentPlayer }) {
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
