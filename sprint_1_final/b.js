const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin,
});

let _input = [];

_reader.on("line", (line) => {
    _input.push(line);
});

process.stdin.on("end", solve);

// https://contest.yandex.ru/contest/22450/run-report/133446700/

function prepareData() {
    const idle = Number(_input[0]);
    const matrix = [];

    _input.splice(1, _input.length).forEach(item => {
        matrix.push(item.split(''));
    });


    return [idle, matrix];
}

PLAYERS = 2;

function checkFriendFingers(idle, matrix) {
    const maxNumber = PLAYERS * idle;
    const keyCount = {};

    matrix.forEach(row => {
        row.forEach(key => {
            if (key !== '.') {
                keyCount[key] = (keyCount[key] ?? 0) + 1;
            }
        })
    })

    let result = 0;

    Object.keys(keyCount).forEach(key => {
        keyCount[key] <= maxNumber ? result++ : null;
    })

    return result;
}

function solve() {
    const [idle, matrix] = prepareData();
    console.log((checkFriendFingers(idle, matrix)));
}