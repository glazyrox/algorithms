// Вася реализовал функцию, которая переводит целое число из десятичной системы в двоичную.
//     Но, кажется, она получилась не очень оптимальной.
//     Попробуйте написать более эффективную программу.
//     Не используйте встроенные средства языка по переводу чисел в бинарное представление.

const test1 = 5;
const test2 = 14;
const test3 = 13;
const test4 = 0;

function getBinaryNumber(number) {
    if (number === 0) {
        return '0';
    }

    let result = '';
    let localNumber = number;

    while (localNumber / 2 >= 0.5) {
        result += Math.floor(localNumber % 2);
        localNumber = localNumber / 2;
    }

    return result.split('').reverse().join('');
}

getBinaryNumber(test1);
getBinaryNumber(test2);
getBinaryNumber(test3)
getBinaryNumber(test4);
