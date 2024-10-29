import styles from "./Game.module.css";
import Field from "./components/field/Field";
import Info from "./components/information/Information";
import PropTypes from "prop-types";

export function GameLayout({
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	isDraw,
	setIsDraw,
	field,
	setField,
	restartGame,
	checkWinner,
	checkDraw,
}) {
	return (
		<div className={styles.game}>
			<h1 className={styles.label}>Игра: "Крестики-Нолики"</h1>
			<Field
				checkDraw={checkDraw}
				checkWinner={checkWinner}
				setField={setField}
				field={field}
				isDraw={isDraw}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				setIsGameEnded={setIsGameEnded}
				setIsDraw={setIsDraw}
				isGameEnded={isGameEnded}
			/>
			<Info
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			<button
				onClick={() => restartGame()}
				hidden={!isGameEnded}
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
