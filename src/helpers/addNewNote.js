import { API_URL } from "./CONSTANTS";

export async function addNewNote(note) {
	const response = await fetch(
		`${API_URL}/data`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(note),
		}
	);
	return response.json();
}
