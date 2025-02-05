// Чтобы подготовиться к семинару, Гоше надо прочитать статью по эффективному менеджменту.
//     Так как Гоша хочет спланировать день заранее, ему необходимо оценить сложность статьи.
//     Он придумал такой метод оценки: берётся случайное предложение из текста и в нём ищется самое длинное слово.
//     Его длина и будет условной сложностью статьи.
//     Помогите Гоше справиться с этой задачей.


const line1 = 'i love segment bibentt tree';
const line2 = 'frog jumps from river';
const line3 = '';
const line4 = ' wytxiscew iqwo vfrrmmxcxwzldwf nahc lzxogtyuflmcphxqgygmn pydmwkdgncqpdiqihuvinsmthzvl bltduarsvsibalmkan gyq qaghxxbbrboovvitzltmseerjhkpkvikcz rkcs qrfxcopymdpcda fyqnyz sgodnwjcgtgitw tuf fir atqo';

function getLongestWord(length, line) {
    const trimmedLine = line.trim();
    const lineArray = trimmedLine.split(' ');
    let result = { 0: '' };

    lineArray.forEach(item => {
        if (!result[item.length]) {
            result[item.length] = item;
        }
    })

    let resultIndex = 0;

    Object.keys(result).forEach(num => {
        if (Number(num) > Number(resultIndex)) resultIndex = num;
    });


    return result[resultIndex];
}

// console.log(getLongestWord(line1.length, line1));
// console.log(getLongestWord(line2.length, line2));
// console.log(getLongestWord(line3.length, line3));
console.log(getLongestWord(line4.length, line4));

