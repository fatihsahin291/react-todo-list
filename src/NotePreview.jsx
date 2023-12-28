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
			<div className="note-body">
				{body.split(" ").map((word, index) => {
					if (index < 7) {
						return word + " ";
					} else if (index === 7) {
						return word + "...";
					} else {
						return;
					}
				})}
			</div>
		</div>
	);
}

export default NotePreview;
