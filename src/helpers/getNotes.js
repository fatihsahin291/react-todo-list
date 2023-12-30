import { API_URL } from "./CONSTANTS";

export default async function getNotes() {
	const response = await fetch(API_URL + "/data");
	const data = await response.json();
	return data;
}
