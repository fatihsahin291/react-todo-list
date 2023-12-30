import { useEffect } from "react";
import "./styles/note-bg-color-picker.css";

function NoteBGColorPicker({ bgColor }) {
	function handleNoteBGColor(e) {
		const color = e.target.style.backgroundColor;

		const colors =
			document.querySelectorAll(".color");

		document.querySelector(
			".add-note"
		).style.backgroundColor = color;

		colors.forEach((color) => {
			color.classList.remove("selected");
		});

		e.target.classList.add("selected");
	}

	function handleChoosenColor() {
		const color = document.querySelector(
			".choosen-color"
		).value;

		document.querySelector(
			".color.color-choose"
		).style.backgroundColor = color;
	}

	useEffect(() => {
		const colors =
			document.querySelectorAll(".color");

		const choosenColor = document.querySelector(
			".color.color-choose"
		);

		// find the selected color and add the selected class if selected color is not found then add the selected class to the choosen color
		let added = false;
		colors.forEach((color) => {
			if (
				color.style.backgroundColor === bgColor
			) {
				color.classList.add("selected");
				added = true;
			}
		});

		if (!added) {
			choosenColor.style.border =
				"2px solid white";
		}
	}, [bgColor]);

	return (
		<div>
			<div
				className="color-picker"
				onClick={handleNoteBGColor}
			>
				<div
					className="color color-default"
					style={{ backgroundColor: "#f5f5f5" }}
				></div>
				<div
					className="color color-coral"
					style={{ backgroundColor: "#faafa8" }}
				></div>
				<div
					className="color color-peach"
					style={{ backgroundColor: "#f39f76" }}
				></div>
				<div
					className="color color-sand-beige"
					style={{ backgroundColor: "#fff8b8" }}
				></div>
				<div
					className="color color-mint-green"
					style={{ backgroundColor: "#e2f6d3" }}
				></div>
				<div
					className="color color-sage"
					style={{ backgroundColor: "#b4ddd3" }}
				></div>
				<div
					className="color color-fog"
					style={{ backgroundColor: "#d4e4ed" }}
				></div>
				<div
					className="color color-storm"
					style={{ backgroundColor: "#aeccdc" }}
				></div>
				<div
					className="color color-twilight"
					style={{ backgroundColor: "#d3bfdb" }}
				></div>
				<div
					className="color color-tree-flower"
					style={{ backgroundColor: "#f6e2dd" }}
				></div>
				<div
					className="color color-clay"
					style={{ backgroundColor: "#e9e3d4" }}
				></div>
				<div
					className="color color-limestone"
					style={{ backgroundColor: "#efeff1" }}
				></div>
				<div
					className="color color-choose"
					style={{ backgroundColor: "black" }}
				></div>
				<input
					type="color"
					name="choosen-color"
					id="choosen-color"
					className="choosen-color"
					onChange={handleChoosenColor}
				/>
			</div>
		</div>
	);
}

export default NoteBGColorPicker;
