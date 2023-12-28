import "./styles/note-preview.css";
import { BsPinFill } from "react-icons/bs";

function NotePreview({ note }) {
	const { title, body, pinned } = note;
	return (
		<div className="note-preview">
			<div className="note-title">
				{title}
				{pinned ? <BsPinFill /> : ""}
			</div>
			<div className="note-body">{body}</div>
		</div>
	);
}

export default NotePreview;
