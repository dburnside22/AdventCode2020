console.log("Day 5");
let fs = require("fs");
let data = fs.readFileSync("./day5.txt", "utf8");
let lines = data.split(/\r?\n/);


function getRow(code){
    let frontOfRange = 0;
    let backOfRange = 127;
    let rowNumber = 0;

    code.forEach(letter => {
        if(letter == "F"){
            backOfRange = backOfRange - (Math.floor((backOfRange - frontOfRange) / 2));
            rowNumber = frontOfRange;
        }
        else {
            frontOfRange = frontOfRange + (Math.round((backOfRange - frontOfRange) / 2));
            rowNumber = backOfRange;
        }
    });
    return rowNumber;
}

function getSeat(code){
    let frontOfRange = 0;
    let backOfRange = 7;
    let seatNumber = 0;

    code.forEach(letter => {
        if(letter == "L"){
            backOfRange = backOfRange - (Math.round((backOfRange - frontOfRange) / 2));
            seatNumber = frontOfRange;
        }
        else {
            frontOfRange = frontOfRange + (Math.round((backOfRange - frontOfRange) / 2));
            seatNumber = backOfRange;
        }
    });
    return seatNumber;
}

function getSeatID(row, seat){
    return row * 8 + seat;
}

function goThroughTheList() {
    let highestID = 0;

    lines.forEach(line => {
        let array = line.split("");
        let row = getRow(array.slice(0,7));
        let seat = getSeat(array.slice(-3));
        let id = getSeatID(row, seat);
        
        if (id > highestID){ highestID = id}
    });
    console.log(highestID)
}

goThroughTheList();