import FieldLayout from "./FieldLayout";
import PropTypes from "prop-types";

export default function Field({
	field,
	currentPlayer,
	setCurrentPlayer,
	setField,
	isGameEnded,
	checkWinner,
	setIsGameEnded,
	checkDraw,
	setIsDraw,
}) {
	const onClick = (index) => {
		if (isGameEnded || field[index].value) return;

		const newField = field.map((c, i) => {
			if (i === index && c.value === "") {
				return { ...c, value: currentPlayer };
			}
			return c;
		});

		if (checkWinner(newField)) {
			setField(newField);
			setIsGameEnded(true);
		} else if (checkDraw(newField)) {
			setField(newField);
			setIsDraw(true);
			setIsGameEnded(true);
		} else {
			setField(newField);
			setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
		}
	};

	return <FieldLayout field={field} onClick={onClick} />;
}

Field.propTypes = {
	currentPlayer: PropTypes.string,
	checkDraw: PropTypes.func,
	checkWinner: PropTypes.func,
	setField: PropTypes.func,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	field: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			value: PropTypes.string,
		}),
	),
};
