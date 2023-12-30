import "./styles/note-input.css";
import { useState } from "react";
import { BsPin, BsPinFill } from "react-icons/bs";
import { addNewNote } from "./helpers/addNewNote";
import getNotes from "./helpers/getNotes";

function NoteInput({ setAddNote, notes }) {
	const [isPinned, setIsPinned] = useState(false);

	function handleAddNote() {
		const title = document.querySelector(
			".note-input[name='title']"
		).value;
		const body = document.querySelector(
			".note-body-input"
		).value;

		if (!title || !body) return setAddNote(false);

		addNewNote({
			id: notes.length + 2,
			title,
			body,
			pinned: isPinned + "",
			color: "default",
		});

		getNotes().then((notes) => {
			console.log(notes);
		});

		setAddNote(false);
	}

	return (
		<div
			className="overlay"
			onClick={(e) => {
				if (e.target.className !== "overlay")
					return;
				setAddNote(false);
			}}
		>
			<div className="add-note">
				<div className="title">
					<input
						type="text"
						name="title"
						placeholder="Enter Title"
						className="note-input"
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
					/>
				</div>

				<div className="btns">
					<button
						className="btn save-btn"
						onClick={handleAddNote}
					>
						Save
					</button>
					<button
						className="btn cancel-btn"
						onClick={() => setAddNote(false)}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
}

export default NoteInput;
