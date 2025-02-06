// Помогите Васе понять, будет ли фраза палиндромом.
//     Учитываются только буквы и цифры, заглавные и строчные буквы считаются одинаковыми.
//     Решение должно работать за O(N), где N — длина строки на входе.

const test1 = 'A man, a plan, a canal: Panama';
const test2 = 'a,:a';
const test3 = '';

const isCharOrNumber = (value) => !(value >= 'A' && value <= 'Z') && !(value >= 'a' && value <= 'z') && !(value >= '0' && value <= '9');

function isPalindrome(line) {
    const middle = line.length / 2;
    let end = line.length - 1;
    let isCorrect = true;

    for (let start = 0; start < middle; start++) {
        while (isCharOrNumber(line[start])) {
            start += 1;
        }

        while (isCharOrNumber(line[end])) {
            end -= 1;
        }

        if (line[start].toLowerCase() !== line[end].toLowerCase()) {
            isCorrect = false;
            break;
        }

        end--;
    }

    return isCorrect;
}

isPalindrome(test1);
isPalindrome(test2);
isPalindrome(test3);
