const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
})

let _input = [];

_reader.on('line', (line) => {
    _input.push(line);
});

process.stdin.on('end', solve);

function prepareData() {
    const columnItem = Number(_input[0]);
    const column = Number(_input[1]);
    const matrix = [];

    _input.splice(2, _input.length).forEach(item => {
        matrix.push(item.split(' '));

    });


    return [columnItem, column, matrix];
}

function solve() {
    const [columnItem, column, matrix] = prepareData();
    transporateMatrix(columnItem, column, matrix);
}

function transporateMatrix(columnItem, column, matrix) {
    for (let i = 0; i < column; i++) {
        let lineResult = '';
        for (let j = 0; j < columnItem; j++) {
            lineResult += matrix[j][i] + ' ';
        }
        process.stdout.write(lineResult + '\n');
    }
}
