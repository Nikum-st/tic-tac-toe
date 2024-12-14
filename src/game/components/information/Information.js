import InfoLayout from "./InformationLayout";
import {
	selectCurrentPlayer,
	selectIsGameEnded,
	selectorIsDraw,
} from "../../store";
import { useSelector } from "react-redux";

export default function Info() {
	const isDraw = useSelector(selectorIsDraw);
	const isGameEnded = useSelector(selectIsGameEnded);
	const currentPlayer = useSelector(selectCurrentPlayer);

	const message = isDraw
		? "Ничья!"
		: isGameEnded
			? `Игра окончена! Игрок ${currentPlayer} выиграл`
			: `Настала очередь ${currentPlayer}`;

	const playerColor = (styles) =>
		currentPlayer === "X" ? styles.x : styles.o;

	return <InfoLayout message={message} playerColor={playerColor} />;
}
