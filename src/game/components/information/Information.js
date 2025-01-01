import { Component } from "react";
import { connect } from "react-redux";
import styles from "./Info.module.css";

class InfoContainer extends Component {
	message() {
		const { isDraw, isGameEnded, currentPlayer } = this.props;
		return isDraw
			? "Ничья!"
			: isGameEnded
				? `Игра окончена! Игрок ${currentPlayer} выиграл`
				: `Настала очередь ${currentPlayer}`;
	}

	playerColor(styles) {
		const { currentPlayer } = this.props;
		return currentPlayer === "X" ? styles.x : styles.o;
	}
	render() {
		return (
			<div className={`${styles.message} ${this.playerColor(styles)}`}>
				{this.message()}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
});

export const Info = connect(mapStateToProps)(InfoContainer);
