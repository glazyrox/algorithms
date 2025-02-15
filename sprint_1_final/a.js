// Тимофей ищет место, чтобы построить себе дом. Улица, на которой он хочет жить, имеет длину n,
// то есть состоит из n одинаковых идущих подряд участков.
//     Каждый участок либо пустой, либо на нём уже построен дом.
//     Общительный Тимофей не хочет жить далеко от других людей на этой улице.
//     Поэтому ему важно для каждого участка знать расстояние до ближайшего пустого участка.
//     Если участок пустой, эта величина будет равна нулю — расстояние до самого себя.
//     Помогите Тимофею посчитать искомые расстояния.
//     Для этого у вас есть карта улицы.
//     Дома в городе Тимофея нумеровались в том порядке, в котором строились, поэтому их номера на карте никак не упорядочены.
//     Пустые участки обозначены нулями.

const test1 = [0, 1, 4, 9, 0]; // 0 1 2 1 0
const test2 = [0, 7, 9, 4, 8, 20]; // 0 1 2 3 4 5
const test3 = [0, 7, 9, 0, 8, 20, 0]; // 0 1 1 0 1 1 0
const test4 = [0, 1, 0];
const test5 = [0];
const test6 = [1];
const test7 = [64, 68, 37, 11, 77, 80, 48, 82, 0] // 8 7 6 5 4 3 2 1 0
const test8 = [98, 0, 10, 77, 0, 59, 28, 0, 94];

// https://contest.yandex.ru/contest/22450/run-report/133446700/

function calcZeros(length, line) {
    let result = [];
    let lastZero = -1;

    for (let i = 0; i < length; i++) {
        result[i] = length;

        if (line[i] === 0) {
            result[i] = 0;
            lastZero = i;
        } else if (lastZero !== -1) {
            result[i] = i - lastZero;
        }
    }

    lastZero = -1;

    for (let i = length -1; i > 0; i--) {
        if (line[i] === 0) {
            result[i] = 0;
            lastZero = i;
        } else if (lastZero !== -1) {
            result[i] = result[i] > lastZero - i ? lastZero - i : result[i];
        }
    }

    return result;
}

calcZeros(test1.length, test1);
calcZeros(test2.length, test2);
calcZeros(test3.length, test3);
calcZeros(test4.length, test4);
calcZeros(test5.length, test5);
calcZeros(test6.length, test6);
calcZeros(test7.length, test7);
calcZeros(test8.length, test8);
