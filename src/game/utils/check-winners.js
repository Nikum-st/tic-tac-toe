import WIN_PATTERNS from "./date/win-patterns";

export default function checkWinner(newField) {
	return WIN_PATTERNS.some(([a, b, c]) => {
		return (
			newField[a].value &&
			newField[a].value === newField[b].value &&
			newField[b].value === newField[c].value
		);
	});
}
