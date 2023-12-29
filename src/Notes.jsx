import "./styles/notes.css";
import NoteInput from "./NoteInput";
import NotePreview from "./NotePreview";
import { useState } from "react";
import AddNote from "./AddNote";
import NoteDetails from "./NoteDetails";

let fakeNotes = [
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
	const [note, setNote] = useState(null);
	const [addNote, setAddNote] = useState(false);
	const [seeNote, setSeeNote] = useState(false);

	function openedNote(id) {
		const note = notes.find(
			(note) => note.id === id
		);
		setNote(note);
	}

	return (
		<div>
			{addNote ? (
				<NoteInput
					setAddNote={setAddNote}
					notes={notes}
				/>
			) : (
				<AddNote setAddNote={setAddNote} />
			)}

			{seeNote ? (
				<NoteDetails
					setSeeNote={setSeeNote}
					notes={notes}
					setNotes={setNotes}
					note={note}
				/>
			) : (
				""
			)}

			<div className="notes-preview">
				<div className="pinned">
					{notes.map((note) =>
						note.pinned ? (
							<NotePreview
								key={note.id}
								note={note}
								setSeeNote={setSeeNote}
								openedNote={openedNote}
							/>
						) : (
							""
						)
					)}
				</div>

				<div className="not-pinned">
					{notes.map((note) =>
						!note.pinned ? (
							<NotePreview
								key={note.id}
								note={note}
								setSeeNote={setSeeNote}
								openedNote={openedNote}
							/>
						) : (
							""
						)
					)}
				</div>
			</div>

			<div className="remove-all">
				<button
					className="btn remove-all-btn"
					onClick={() => setNotes([])}
				>
					Remove All
				</button>
			</div>
		</div>
	);
}

export default Notes;
