// Нужно реализовать класс StackMax, который поддерживает операцию определения максимума среди всех элементов в стеке.
// Класс должен поддерживать операции push(x), где x – целое число, pop() и get_max(

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
    const output = [];

    _input.forEach(item => {
        output.push(item.split(' '));
    })

    return output;
}

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.items.length === 0) {
            console.log('error');
        }

        this.items.pop();
    }

    get_max() {
        if (this.items.length) {
            console.log(Math.max(...this.items));
        } else {
            console.log("None");
        }
    }
}

function solve() {
    const stack = new Stack();
    const [_, ...command] = prepareData();

    command.forEach((item) => {
        if (item[0] === "get_max") {
            stack.get_max();
        } else if (item[0] === "pop") {
            stack.pop();
        } else if (item[0] === "push") {
            stack.push(item[1]);
        }
    });

    return stack;
}