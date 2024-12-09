import styles from "./Game.module.css";
import Field from "./components/field/Field";
import Info from "./components/information/Information";
import { store } from "./store/store";
import { useEffect, useState } from "react";
import restartGame from "./utils/restart-game";

export function Game() {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => unsubscribe();
	}, []);

	const { isGameEnded } = state;

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
