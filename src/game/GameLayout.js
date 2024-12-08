import styles from "./Game.module.css";
import Field from "./components/field/Field";
import Info from "./components/information/Information";
import PropTypes from "prop-types";
import { store } from "./store/store";

export function GameLayout({ restartGame, checkWinner, checkDraw }) {
	return (
		<div className={styles.game}>
			<h1 className={styles.label}>Игра: "Крестики-Нолики"</h1>
			<Field checkDraw={checkDraw} checkWinner={checkWinner} />
			<Info />
			<button
				onClick={() => restartGame()}
				hidden={store.getState().isGameEnded === false}
				className={styles.restart}
			>
				Играть заново
			</button>
		</div>
	);
}

GameLayout.propTypes = {
	currentPlayer: PropTypes.string,
	checkDraw: PropTypes.func,
	restartGame: PropTypes.func,
	checkWinner: PropTypes.func,
	setField: PropTypes.func,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			value: PropTypes.string,
		}),
	),
};
