import "./styles/note-input.css";
import { useState } from "react";
import { BsPin, BsPinFill } from "react-icons/bs";
import { deleteNote } from "./helpers/deleteNote";
import { saveChangedNote } from "./helpers/saveChangedNote";

function NoteDetails({ setSeeNote, note }) {
	const { title, body, pinned, id } = note;

	const [isPinned, setIsPinned] =
		useState(pinned);

	function handleSaveNote() {
		const title = document.querySelector(
			".note-input[name='title']"
		).value;
		const body = document.querySelector(
			".note-body-input"
		).value;

		if (!title || !body) return setSeeNote(false);

		const res = saveChangedNote(id, {
			id,
			title,
			body,
			pinned: isPinned + "",
		});

		res.then((res) => {
			console.log(res);
			// Reload the notes component
			window.location.reload();
		});

		setSeeNote(false);
	}

	return (
		<div
			className="overlay"
			onClick={(e) => {
				if (e.target.className !== "overlay")
					return;
				setSeeNote(false);
			}}
		>
			<div className="add-note">
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
						onClick={() => {
							const res = deleteNote(id);
							console.log(res);
							setSeeNote(false);
						}}
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}

export default NoteDetails;
