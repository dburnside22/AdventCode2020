console.log("Day 2");
let fs = require("fs");

const passwords = () => {
	let data = fs.readFileSync("./day2.txt", "utf8");
	let lines = data.split(/\r?\n/);

	let total = 0;

	lines.forEach((line) => {
		let split = line.split(":");
		let instructions = split[0].split("-");
		let password = split[1];
		let numberInstrutions = [];
		numberInstrutions.push(Number(instructions[0]));
		numberInstrutions.push(Number(instructions[1].split(" ")[0]));
		let letterInstrustions = instructions[1].split(" ")[1];

		let arrayOfPassword = password.substring(1).split("");

		if (
			(arrayOfPassword[numberInstrutions[0] - 1] == letterInstrustions &&
				arrayOfPassword[numberInstrutions[1] - 1] != letterInstrustions) ||
			(arrayOfPassword[numberInstrutions[1] - 1] == letterInstrustions &&
				arrayOfPassword[numberInstrutions[0] - 1] != letterInstrustions)
		) {
			total++;
		}
	});

	console.log("total", total);
};

passwords();
