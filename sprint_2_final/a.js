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

//
// -- ПРИНЦИП РАБОТЫ --
//     реализовал двустороннюю очередь на массиве, элементы можно добавлять в начало и конец.
//     Удалять элементы можно из начала и с конца
//     Принцип работы основан на кольцевом буффере
//     Состояние управляется с помощью указателей на "head" и "tail", и. постоянным  "size"
//     push_front - стартует с 0 и двигается по круговому буферу вправо
//     push_back - стартует с 0 и двигается влево

// -- ВРЕМЕННАЯ СЛОЖНОСТЬ --
// Операции удаления, добавления происходят за О(1)
// Обработка всех команд занимает O(n)

// -- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
// Дек занимает O(m) памяти
// Поэтому сложность О(m)

// -- ПОССЫЛКА --
// https://contest.yandex.ru/contest/22781/run-report/134282322/

const DEQ_CMD = {
    push_front: 'pushFront',
    push_back: 'pushBack',
    pop_front: 'popFront',
    pop_back: 'popBack',
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

    get isEmpty() {
        return this.size === 0
    }

    get isFull() {
        return this.size === this.maxN;
    }

    pushBack(x) {
        if (this.isFull) {
            throw new Error(this.ERROR);
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

    pushFront(x) {
        if (this.isFull) {
            throw new Error(this.ERROR);
        }

        if (this.head === -1) {
            this.head = this.tail = 0;

            this.queue[this.head] = x;

            this.size++;
        } else {
            this.head = (this.head - 1 + this.maxN) % this.maxN;
            this.queue[this.head] = x;

            this.size++;
        }
    }

    popBack() {
        if (this.isEmpty) {
            throw new Error(this.ERROR);
        } else {
            this.size--;
            const result = this.queue[this.tail];
            this.queue[this.tail] = null;

            this.tail = (this.tail - 1 + this.maxN) % this.maxN;

            return result;
        }
    }

    popFront() {
        if (this.isEmpty) {
            throw new Error(this.ERROR);
        } else {
            const result = this.queue[this.head];
            this.size--;
            this.queue[this.head] = null;

            this.head = (this.head + 1) % this.maxN;

            return result
        }
    }
}

function solve() {
    const { _, sizeNum, command } = prepareData();
    const deq = new Deq(sizeNum);

    command.forEach(cmdItem => {
        let result;

        try {
            if (cmdItem.length === 2) {
                deq?.[DEQ_CMD[cmdItem[0]]]?.(Number(cmdItem[1]));
            } else {
                result = deq?.[DEQ_CMD[cmdItem[0]]]?.();
            }

            if (typeof result !== "undefined") console.log(result);
        } catch (error) {
            console.log('error');
        }
    });
}
