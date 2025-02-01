// Дана матрица.
// Нужно написать функцию, которая для элемента возвращает всех его соседей.
// Соседним считается элемент, находящийся от текущего на одну ячейку влево, вправо, вверх или вниз.
// Диагональные элементы соседними не считаются.
// Например, в матрице A соседними элементами для (0, 0) будут 2 и 0. А для (2, 1) –— 1, 2, 7, 7.

// 4
// 3
// 1 2 3
// 0 2 6
// 7 4 1
// 2 7 0
// 3
// 0

const testMatrix1 = [
    [1, 2, 3],
    [0, 2, 6],
    [7, 4, 1],
    [2, 7, 0],
];

// 4
// 3
// 1 2 3
// 0 2 6
// 7 4 1
// 2 7 0
// 0
// 0


function getNeighbours(matrix, row, col) {
    return [
        matrix?.[row]?.[col - 1],
        matrix?.[row]?.[col + 1],
        matrix?.[row - 1]?.[col],
        matrix?.[row + 1]?.[col],
    ].sort((a, b) => a - b).filter(value => value !== undefined);
}

console.log(getNeighbours(testMatrix1, 0, 0));
console.log(getNeighbours([], 0, 0));
console.log(getNeighbours([], -1, -5));
