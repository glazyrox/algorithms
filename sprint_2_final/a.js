// Гоша реализовал структуру данных Дек, максимальный размер которого определяется заданным числом.
//     Методы push_back(x), push_front(x), pop_back(), pop_front() работали корректно.
//     Но, если в деке было много элементов, программа работала очень долго.
//     Дело в том, что не все операции выполнялись за O(1).
//     Помогите Гоше! Напишите эффективную реализацию.
//     Внимание: при реализации используйте кольцевой буфер.

const _readline = require('readline');
const _reader = _readline.createInterface({
    input: process.stdin,
})
const _input = [];

_reader.on("line", (line) => {
    _input.push(line.split(' '));
})

process.stdin.on("end", solve);

const prepareData = () => {
    const commandNum = Number(_input[0]);
    const sizeNum = Number(_input[1]);
    const [_, __, ...command] = _input;

    return { commandNum, sizeNum, command};
}

class Deq {
    constructor(n) {
        this.queue = new Array(n).fill(null);
        this.head = -1;
        this.tail = -1;
        this.maxN = n;
        this.size = 0;

        this.ERROR = 'error';
    }

    push_back(x) {
        if (this.size === this.maxN) {
            console.log(this.ERROR);
            return;
        }

        if (this.tail === -1  ) {
            this.tail = this.head = 0;

            this.queue[this.tail] = x;

            this.size++;
        } else {
            this.tail = (this.tail + 1) % this.maxN;
            this.queue[this.tail] = x;

            this.size++;
        }
    }

    push_front(x) {
        if (this.size === this.maxN) {
            console.log(this.ERROR);
            return;
        }

        if (this.head === -1 ) {
            this.head = this.tail = 0;

            this.queue[this.head] = x;

            this.size++;
        } else {
            this.head = (this.head - 1 + this.maxN) % this.maxN;
            this.queue[this.head] = x;

            this.size++;
        }
    }

    pop_back() {
        if (this.size === 0) {
            console.log(this.ERROR);


            return;
        } else {
            this.size--;
            console.log(this.queue[this.tail]);
            this.queue[this.tail] = null;

            this.tail = (this.tail - 1 + this.maxN) % this.maxN;
        }
    }

    pop_front() {
        if (this.size === 0) {
            console.log(this.ERROR);


            return;

        } else {
            this.size--;
            console.log(this.queue[this.head]);
            this.queue[this.head] = null;

            this.head = (this.head + 1) % this.maxN;
        }
    }
}

function solve() {
    const { _, sizeNum, command } = prepareData();
    const deq = new Deq(sizeNum);

    command.forEach(cmdItem => {
        if (cmdItem.length === 2) {
            deq?.[cmdItem[0]]?.(Number(cmdItem[1]));
        } else {
            deq?.[cmdItem[0]]?.();
        }
    });
}
