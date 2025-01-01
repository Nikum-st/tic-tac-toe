import { Component } from "react";
import { connect } from "react-redux";
import handlePlayerMove from "../../utils/handle-player-move";

class FieldContainer extends Component {
	render() {
		const { field, handlePlayerMove } = this.props;

		return (
			<div className="flex justify-center text-center w-96 h-96 border-2 border-gray-800 rounded-lg bg-red-400 shadow-lg shadow-black/60 my-5 mx-auto">
				<ul className="grid grid-cols-3 grid-rows-3 gap-2 justify-center mx-auto my-5 p-0 list-none">
					{field.map(({ id, value }, index) => (
						<button
							id={id}
							value={value}
							onClick={() => handlePlayerMove(index)}
							key={id}
							disabled={value !== ""}
							className={`w-[100px] h-[100px] text-[50px] font-bold text-gray-800 bg-gray-100
								border-2 border-gray-800 rounded-lg cursor-pointer transition-all duration-300 hover:bg-gray-200 hover:shadow-md
								${value === "X" ? "text-yellow-500" : value === "O" ? "text-blue-500" : "active:bg-[#d0d0d0] shadow-inner shadow-black/40"}`}
						>
							{value}
						</button>
					))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	field: state.field,
});

const mapDispatchToProps = (dispatch) => {
	return {
		handlePlayerMove: (index) => dispatch(handlePlayerMove(index)),
	};
};

export const Field = connect(
	mapStateToProps,
	mapDispatchToProps,
)(FieldContainer);
