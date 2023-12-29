export default async function getNotes() {
	const response = await fetch(
		"http://localhost:3000/data"
	);
	const data = await response.json();
	return data;
}
