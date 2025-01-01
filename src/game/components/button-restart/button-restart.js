import { Component } from "react";
import { connect } from "react-redux";

class ButtonRestartContainer extends Component {
	render() {
		const { dispatch, isGameEnded } = this.props;
		return (
			<button
				onClick={() => dispatch({ type: "SET_INITIAL_STATE" })}
				hidden={!isGameEnded}
				className="bg-blue-500 border border-blue-500 text-white py-2 px-4 text-lg cursor-pointer rounded-md transition-all duration-300 hover:bg-blue-700 active:bg-blue-800 my-5"
			>
				Играть заново
			</button>
		);
	}
}
const mapStateToProps = (state) => ({
	isGameEnded: state.isGameEnded,
});

export const ButtonRestart = connect(mapStateToProps)(ButtonRestartContainer);
