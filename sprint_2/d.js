//     Мама Васи хочет знать, что сын планирует делать и когда.
//     Помогите ей: напишите функцию solution, определяющую индекс первого вхождения передаваемого ей на вход значения в связном списке,
//     если значение присутствует.
//     Внимание: в этой задаче не нужно считывать входные данные.
//     Нужно написать только функцию, которая принимает на вход голову списка и искомый элемент,
//     а возвращает целое число — индекс найденного элемента или -1.

// if (process.env.REMOTE_JUDGE !== 'true') {
    class Node {
        constructor(value = null, next = null) {
            this.value = value;
            this.next = next;
        }
    }
// }

function solution(node, elem) {
    let srcIndex = 0;
    let idle = -1;

    while (node) {
        if (node.value === elem) {
            idle = srcIndex;
            break;
        }

        node = node.next;
        srcIndex++;
    }

    return idle;
}

function test() {
    var node3 = new Node("node3");
    var node2 = new Node("node2", node3);
    var node1 = new Node("node1", node2);
    var node0 = new Node("node0", node1);
    var idx = solution(node0, "node6");
    // result is idx === 2
}

test();