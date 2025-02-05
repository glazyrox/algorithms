// Метеорологическая служба вашего города решила исследовать погоду новым способом.
//
//     Под температурой воздуха в конкретный день будем понимать максимальную температуру в этот день.
//     Под хаотичностью погоды за n дней служба понимает количество дней, в которые температура строго больше,
//     чем в день до (если такой существует) и в день после текущего (если такой существует).
//     Например, если за 5 дней максимальная температура воздуха составляла [1, 2, 5, 4, 8] градусов,
//     то хаотичность за этот период равна 2: в 3-й и 5-й дни выполнялись описанные условия.
//     Определите по ежедневным показаниям температуры хаотичность погоды за этот период.
//
//     Заметим, что если число показаний n=1, то единственный день будет хаотичным.

const test1 = [-1, -10, -8, 0, 2, 0, 5];
const test2 = [1, 2, 5, 4, 8];
const test3 = [1, 2];

function getWeatherRandomness(temperatures) {
    let dayCount = 0;

    if (temperatures?.length === 1) {
        return 1;
    } else if (!temperatures?.length) {
        return dayCount;
    }

    if (temperatures[0] > temperatures[1]) {
        dayCount++;
    }

    if (temperatures[temperatures.length - 1] > temperatures[temperatures.length -2]) {
        dayCount++;
    }

    for (let i = 1; i < temperatures.length - 1; i++) {
        const isPrevExist = temperatures[i - 1] !== undefined;
        const isNextExist = temperatures[i + 1] !== undefined;

        const src = temperatures[i];


        if (isPrevExist && temperatures[i - 1] < src && src > temperatures[i + 1] && isNextExist) {
            dayCount++;
        }
    }

    return dayCount;
}

getWeatherRandomness(test1);
getWeatherRandomness(test2);
getWeatherRandomness(test3);
