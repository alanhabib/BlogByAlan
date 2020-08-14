function zerofill(i) {
	return (i < 10 ? "0" : "") + i;
}
export function buildDate(rawDate) {
	const date = new Date(rawDate);
	const year = date.getFullYear();
	const monthIndex = zerofill(date.getMonth() + 1);
	const day = zerofill(date.getDate());

	const hours =
		date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
	const mins =
		date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	const secs =
		date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

	return (
		year + "-" + monthIndex + "-" + day + ", " + hours + ":" + mins
		// ":" +
		// secs
	);
}

export default function month(data) {
	const date = new Date(data);
	const monthIndex = date.getMonth();
	return monthIndex.toLocaleString("en-GB", { month: "long" });
}
