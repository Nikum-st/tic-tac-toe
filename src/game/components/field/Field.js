import useHandlePlayerMove from "../../utils/use-handle-player-move";
import styles from "./Field.module.css";
import { selectField } from "../../store";
import { useSelector } from "react-redux";

export default function Field() {
	const handlePlayerMove = useHandlePlayerMove();
	const field = useSelector(selectField);
	return (
		<div className={styles.field}>
			<ul>
				{field.map(({ id, value }, index) => (
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
