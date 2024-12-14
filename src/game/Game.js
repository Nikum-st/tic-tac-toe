import { useSelector } from "react-redux";
import styles from "./Game.module.css";
import Field from "./components/field/Field";
import Info from "./components/information/Information";
import useRestartGame from "./utils/use-restart-game";
import { selectIsGameEnded } from "./store/selectors/is-game-ended";

export function Game() {
	const isGameEnded = useSelector(selectIsGameEnded);
	const restartGame = useRestartGame();

	return (
		<div className={styles.game}>
			<h1 className={styles.label}>Игра: "Крестики-Нолики"</h1>
			<Field />
			<Info />
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
