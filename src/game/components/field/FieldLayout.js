import { store } from "../../store/store";
import styles from "./Field.module.css";
import PropTypes from "prop-types";

export default function FieldLayout({ onClick }) {
	return (
		<div className={styles.field}>
			<ul>
				{store.getState().field.map(({ id, value }, index) => (
					<button
						id={id}
						value={value}
						onClick={() => onClick(index)}
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

FieldLayout.propTypes = {
	onClick: PropTypes.func,
	field: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			value: PropTypes.string,
		}),
	),
};
