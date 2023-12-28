import "./styles/note-input.css";
import { useState } from "react";
import { BsPin, BsPinFill } from "react-icons/bs";

function NoteInput() {
	const [isPinned, setIsPinned] = useState(false);

	return (
		<div className="overlay">
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
					<button className="btn save-btn">
						Save
					</button>
					<button className="btn cancel-btn">
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
}

export default NoteInput;
