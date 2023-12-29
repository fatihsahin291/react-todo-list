import "./styles/add-note.css";

function AddNote({ setAddNote }) {
	return (
		<div
			className="add-note-small"
			onClick={() => setAddNote(true)}
		>
			<div className="add-note-title">Title</div>
			<button className="btn">Add Note</button>
		</div>
	);
}

export default AddNote;
