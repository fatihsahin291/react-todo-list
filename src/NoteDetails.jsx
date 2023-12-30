import "./styles/note-input.css";
import { useState } from "react";
import { BsPin, BsPinFill } from "react-icons/bs";
import { deleteNote } from "./helpers/deleteNote";
import { saveChangedNote } from "./helpers/saveChangedNote";
import NoteBGColorPicker from "./NoteBGColorPicker";

function NoteDetails({ setSeeNote, note }) {
	const { title, body, pinned, id, color } = note;

	const [isPinned, setIsPinned] =
		useState(pinned);

	function handleSaveNote() {
		const title = document.querySelector(
			".note-input[name='title']"
		).value;
		const body = document.querySelector(
			".note-body-input"
		).value;
		const color =
			document.querySelector(".add-note").style
				.backgroundColor;

		if (!title || !body) return setSeeNote(false);

		const res = saveChangedNote(id, {
			id,
			title,
			body,
			pinned: isPinned + "",
			color: color,
		});

		res.then((res) => {
			console.log(res);
			// Reload the notes component
			window.location.reload();
		});

		setSeeNote(false);
	}

	function handleDeleteNote() {
		const res = deleteNote(id);
		console.log(res);
		res.then((res) => {
			console.log(res);
			// Reload the notes component
			window.location.reload();
		});
		setSeeNote(false);
	}

	const bgStyle = {
		backgroundColor: color,
	};

	return (
		<div
			className="overlay"
			onClick={(e) => {
				if (e.target.className !== "overlay")
					return;
				setSeeNote(false);
			}}
		>
			<div className="add-note" style={bgStyle}>
				<div className="title">
					<input
						type="text"
						name="title"
						placeholder="Enter Title"
						className="note-input"
						defaultValue={title}
					/>
					<button
						className="btn pin-btn"
						onClick={() => setIsPinned(!isPinned)}
					>
						{isPinned ? <BsPinFill /> : <BsPin />}
					</button>
				</div>

				<div className="body">
					<textarea
						name="body"
						placeholder="Enter Note"
						className="note-body-input"
						defaultValue={body}
					/>
				</div>

				<div className="btns">
					<button
						className="btn save-btn"
						onClick={handleSaveNote}
					>
						Save
					</button>
					<button
						className="btn cancel-btn"
						onClick={() => setSeeNote(false)}
					>
						Cancel
					</button>

					<button
						className="btn delete-btn"
						onClick={handleDeleteNote}
					>
						Delete
					</button>
				</div>

				<div className="divider"></div>

				<NoteBGColorPicker bgColor={color} />
			</div>
		</div>
	);
}

export default NoteDetails;
