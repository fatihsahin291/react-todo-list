import "./styles/notes.css";
import { useEffect, useState } from "react";
import NoteInput from "./NoteInput";
import NotePreview from "./NotePreview";
import AddNote from "./AddNote";
import NoteDetails from "./NoteDetails";
import getNotes from "./helpers/getNotes";

function Notes() {
	const [notes, setNotes] = useState([]);
	const [note, setNote] = useState(null);
	const [addNote, setAddNote] = useState(false);
	const [seeNote, setSeeNote] = useState(false);

	const data = async () => {
		const notes = await getNotes();
		console.log(notes);
		setNotes(notes);
	};

	useEffect(() => {
		data();
	}, []);

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
						note.pinned === "true" ? (
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
						note.pinned !== "true" ? (
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
