import { Field } from "./components/field/Field";
import { Info } from "./components/information/Information";
import { Component } from "react";
import { ButtonRestart } from "./components/button-restart/button-restart";

export class Game extends Component {
	render() {
		return (
			<div className="flex justify-center items-center h-screen flex-col">
				<h1 className="text-center m-5">Игра: "Крестики-Нолики"</h1>
				<Field />
				<Info />
				<ButtonRestart />
			</div>
		);
	}
}
