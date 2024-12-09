import { store } from "../../store/store";
import useHandlePlayerMove from "../../utils/use-handle-player-move";
import styles from "./Field.module.css";

export default function Field() {
	const handlePlayerMove = useHandlePlayerMove();
	return (
		<div className={styles.field}>
			<ul>
				{store.getState().field.map(({ id, value }, index) => (
					<button
						id={id}
						value={value}
						onClick={() => handlePlayerMove(index)}
						key={id}
						disabled={value !== ""}
						className={
							value === "X"
								? styles.x
								: value === "O"
									? styles.o
									: styles.active
						}
					>
						{value}
					</button>
				))}
			</ul>
		</div>
	);
}
