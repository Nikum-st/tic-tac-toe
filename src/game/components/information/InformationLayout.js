import styles from "./Info.module.css";
import PropTypes from "prop-types";

export default function InfoLayout({ message, playerColor }) {
	return (
		<div className={`${styles.message} ${playerColor(styles)}`}>
			{message}
		</div>
	);
}

InfoLayout.propTypes = {
	message: PropTypes.string,
	playerColor: PropTypes.func,
};
