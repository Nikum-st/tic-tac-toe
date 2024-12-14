import { useDispatch } from "react-redux";
import { SET_INITIAL_STATE } from "../store";

export default function useRestartGame() {
	const dispatch = useDispatch();

	const restartGame = () => {
		dispatch(SET_INITIAL_STATE);
	};

	return restartGame;
}
