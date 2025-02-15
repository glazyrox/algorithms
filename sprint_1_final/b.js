const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin,
});

let _input = [];

_reader.on("line", (line) => {
    _input.push(line);
});

process.stdin.on("end", solve);

function prepareData() {
    const idle = Number(_input[0]);
    const matrix = [];

    _input.splice(1, _input.length).forEach(item => {
        matrix.push(item.split(''));
    });


    return [idle, matrix];
}

function checkFriendFingers(idle, matrix) {
    const maxNumber = 2 * idle;
    const variants = {};

    matrix.forEach(matrixItem => {
        matrixItem.forEach(item => {
            if (item !== '.') {
                if (!variants[item]) variants[item] = 1;
                else variants[item] += 1;
            }
        })
    })

    let result = 0;

    Object.keys(variants).forEach(key => {
        variants[key] <= maxNumber ? result++ : null;
    })

    return result;
}

function solve() {
    const [idle, matrix] = prepareData();
    console.log((checkFriendFingers(idle, matrix)));
}