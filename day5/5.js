console.log("Day 5");
let fs = require("fs");
let data = fs.readFileSync("./day5.txt", "utf8");
let lines = data.split(/\r?\n/);

function getRow(code) {
	let frontOfRange = 0;
	let backOfRange = 127;
	let rowNumber = 0;

	code.forEach((letter) => {
		if (letter == "F") {
			backOfRange = backOfRange - (backOfRange - frontOfRange) / 2;
			rowNumber = frontOfRange;
		} else {
			frontOfRange = frontOfRange + (backOfRange - frontOfRange) / 2;
			rowNumber = backOfRange;
		}
	});

	return rowNumber;
}

function getSeat(code) {
	let frontOfRange = 0;
	let backOfRange = 7;
	let seatNumber = 0;
	code.forEach((letter) => {
		if (letter == "L") {
			backOfRange = backOfRange - (backOfRange - frontOfRange) / 2;
			seatNumber = frontOfRange;
		} else {
			frontOfRange = frontOfRange + (backOfRange - frontOfRange) / 2;
			seatNumber = backOfRange;
		}
	});
	return seatNumber;
}

function findTheMissingSeat(seatsTaken) {
	let allSeatIds = [];

	for (let row = 0; row < 128; row++) {
		for (let seat = 0; seat < 8; seat++) {
			allSeatIds.push(row * 8 + seat);
		}
	}

	console.log(allSeatIds.filter((seatId) => !seatsTaken.includes(seatId)));
}

function goThroughTheList() {
	let highestID = 0;
	let theSeats = [];

	lines.forEach((line) => {
		let array = line.split("");
		let row = getRow(array.slice(0, 7));
		let seat = getSeat(array.slice(-3));
		let id = Math.round(row * 8 + seat);

		if (id > highestID) {
			highestID = id;
		}

		theSeats.push(id);
	});
	console.log("Highest", highestID);
	console.log(theSeats.length);
	findTheMissingSeat(theSeats);
}

goThroughTheList();
