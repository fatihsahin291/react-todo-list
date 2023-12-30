import { API_URL } from "./CONSTANTS";

export async function deleteNote(id) {
	const response = await fetch(
		`${API_URL}/data/${id}`,
		{
			method: "DELETE",
		}
	);
	return response.json();
}
