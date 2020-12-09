let fs = require("fs");
let data = fs.readFileSync("./day4.txt", "utf8");
let lines = data.split("\n\n");

function getValidPasswords() {
	let validPasswords = 0;
	lines.forEach((line) => {
		let hasTheStuff = true;
		const needToHaveKeys = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];

		let arrayOfKeyValues = line.replace(/\n/g, " ").split(" ");
		const t = [];
		const justTheKeys = [];
		arrayOfKeyValues.forEach((key) => {
			justTheKeys.push(key.split(":")[0]);
			t.push(key.split(":")[1]);
		});

		needToHaveKeys.forEach((key) => {
			if (!justTheKeys.includes(key)) {
				hasTheStuff = false;
			}
		});

		justTheKeys.forEach((key, i) => {
			switch (key) {
				case "byr":
					if (t[i] < 1920 || t[i] > 2002 || t[i].length != 4) {
						hasTheStuff = false;
					}
					break;
				case "iyr":
					if (t[i] < 2010 || t[i] > 2020 || t[i].length != 4) {
						hasTheStuff = false;
					}
					break;
				case "eyr":
					if (t[i] < 2020 || t[i] > 2030 || t[i].length != 4) {
						hasTheStuff = false;
					}
					break;
				case "hcl":
					if (!t[i].match("^#[0-9a-f]{6}$")) {
						hasTheStuff = false;
					}
					break;
				case "pid":
					if (!t[i].match("^[0-9]{9}$")) {
						hasTheStuff = false;
					}
					break;
				case "ecl":
					const matchingArray = [
						"amb",
						"blu",
						"brn",
						"gry",
						"grn",
						"hzl",
						"oth",
					];
					if (!matchingArray.includes(t[i])) {
						hasTheStuff = false;
					}
					break;
				case "hgt":
					if (t[i].slice(-2) == "cm") {
						let nu = Number(t[i].replace("cm", ""));
						if (nu < 150 || nu > 193) {
							hasTheStuff = false;
						}
					} else if (t[i].slice(-2) == "in") {
						let nu = Number(t[i].replace("in", ""));
						if (nu < 59 || nu > 76) {
							hasTheStuff = false;
						}
					} else if (t[i].slice(-2) != "cm" && t[i].slice(-2) != "in") {
						hasTheStuff = false;
					}
					break;

				default:
			}
		});

		if (hasTheStuff) {
			validPasswords++;
		}
	});
	console.log(validPasswords);
}

getValidPasswords();
