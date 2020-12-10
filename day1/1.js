console.log("Day 1");
let fs = require("fs");

const getNumbersThatEqual2020 = () => {
	let json = JSON.parse(fs.readFileSync("./day1.json", "utf8"));
	const numbers = json.numbers;

	numbers.forEach((number) => {
		const twentyTwentyDifference = 2020 - number;
		numbers.forEach((numberAgain) => {
			const numberDifference = twentyTwentyDifference - numberAgain;
			if (numbers.includes(numberDifference)) {
				console.log(number);
				console.log(numberAgain);
				console.log(numberDifference);
			}
		});
	});
};

getNumbersThatEqual2020();
