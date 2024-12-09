export default function checkDraw(newField) {
	return newField.every(({ value }) => value !== "");
}
