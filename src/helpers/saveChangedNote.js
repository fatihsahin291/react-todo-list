import { API_URL } from "./CONSTANTS";

export async function saveChangedNote(id, note) {
	const response = await fetch(
		`${API_URL}/data/${id}`,
		{
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(note),
		}
	);
	return response.json();
}
