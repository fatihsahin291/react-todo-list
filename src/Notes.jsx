import "./styles/notes.css";
import NoteInput from "./NoteInput";
import NotePreview from "./NotePreview";
import { useState } from "react";

const fakeNotes = [
	{
		id: 1,
		pinned: true,
		title: "First Note",
		body: "This is the body of the first note. This is the body of the first note. This is the body of the first note. This is the body of the first note.",
	},
	{
		id: 2,
		pinned: false,
		title: "Second Note",
		body: "This is the body of the second note",
	},
	{
		id: 3,
		pinned: false,
		title: "Third Note",
		body: "This is the body of the third note",
	},
];

function Notes() {
	const [notes, setNotes] = useState(fakeNotes);

	return (
		<div>
			<NoteInput />

			<div className="notes-preview">
				<div className="pinned">
					{fakeNotes.map((note) =>
						note.pinned ? (
							<NotePreview
								key={note.id}
								note={note}
							/>
						) : (
							""
						)
					)}
				</div>

				<div className="not-pinned">
					{fakeNotes.map((note) =>
						!note.pinned ? (
							<NotePreview
								key={note.id}
								note={note}
							/>
						) : (
							""
						)
					)}
				</div>
			</div>

			<div className="remove-all">
				<button className="btn remove-all-btn">
					Remove All
				</button>
			</div>
		</div>
	);
}

export default Notes;
