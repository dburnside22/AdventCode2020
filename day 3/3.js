console.log("Day 3");
let fs = require("fs");
let data = fs.readFileSync("./day3.txt", "utf8");
let lines = data.split(/\r?\n/);

const findTheTrees = (x, y) => {
	let currentX = x;
	let currentY = y;
	let trees = 0;
	for (let i = currentY; i < lines.length; i += y) {
		let line = lines[i];
		if (currentX >= line.length) {
			currentX -= line.length;
		}
		if (line.split("")[currentX] == "#") {
			trees++;
		}
		currentX += x;
	}
	return trees;
};

const findTreesInAPath = () => {
	let array = [];

	array.push(findTheTrees(1, 1));
	array.push(findTheTrees(3, 1));
	array.push(findTheTrees(5, 1));
	array.push(findTheTrees(7, 1));
	array.push(findTheTrees(1, 2));

	total = 1;
	array.forEach((t) => {
		total *= t;
	});

	console.log(total);
};

findTreesInAPath();
