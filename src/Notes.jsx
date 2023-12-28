import "./styles/notes.css";
import NoteInput from "./NoteInput";
import NotePreview from "./NotePreview";

const fakeNotes = [
	{
		id: 1,
		pinned: true,
		title: "First Note",
		body: "This is the body of the first note",
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
	return (
		<div>
			<NoteInput />

			<div className="notes-preview">
				{fakeNotes.map((note) => (
					<NotePreview
						key={note.id}
						note={note}
					/>
				))}
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
