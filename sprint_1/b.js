// Представьте себе онлайн-игру для поездки в метро: игрок нажимает на кнопку,
// и на экране появляются три случайных числа.
// Если все три числа оказываются одной чётности, игрок выигрывает.
// Напишите программу, которая по трём числам определяет, выиграл игрок или нет.

const test1 = [1, 2, -3];
const test2 = [7, 11, 7];
const test3 = [6, -2, 0];
const test4 = [0, 0, 0];
const test5 = [-2, -2, 2];
const test6 = [21, 19, -25];
const test7 = [-687373597, 423392027, 259465703]

function checkParity(a, b, c) {
    const first = (a % 2);
    const second = (b % 2);
    const third = (c % 2);

    const positiveFirst = first < 0 ? first * -1 : first;
    const positiveSecond = second < 0 ? second * -1 : second;
    const positiveThird = third < 0 ? third * -1 : third;

    return positiveFirst === positiveSecond && positiveSecond === positiveThird;
}

console.log(checkParity(...test1))
console.log(checkParity(...test2))
console.log(checkParity(...test3))
console.log(checkParity(...test4))
console.log(checkParity(...test5))
console.log(checkParity(...test6))
