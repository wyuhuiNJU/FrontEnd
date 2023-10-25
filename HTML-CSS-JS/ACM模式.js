// JS V8:
const line = readline();

// JS Node:
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let data = [];
rl.on("line", function (line) {
    data.push(line.split(" ").map((num) => parseInt(num)));
});

rl.on("close", function () {
    console.log(data);
});
