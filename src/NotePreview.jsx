import "./styles/note-preview.css";
import { BsPinFill } from "react-icons/bs";

function NotePreview({
	note,
	setSeeNote,
	openedNote,
}) {
	const { title, body, pinned, id, color } = note;

	const bgStyle = {
		backgroundColor: color,
	};

	return (
		<div
			className="note-preview"
			onClick={() => {
				openedNote(id);
				setSeeNote(true);
			}}
			style={bgStyle}
		>
			<div className="note-title">
				{title}
				{pinned === "true" ? <BsPinFill /> : ""}
			</div>
			<div className="note-body">
				{body.slice(0, 40) + "..."}
			</div>
		</div>
	);
}

export default NotePreview;
