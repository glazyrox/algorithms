// Вася размышляет, что ему можно не делать из того списка дел, который он составил.
//     Но, кажется, все пункты очень важные!
//     Вася решает загадать число и удалить дело, которое идёт под этим номером.
//     Список дел представлен в виде односвязного списка.
//     Напишите функцию solution, которая принимает на вход голову списка и номер удаляемого дела и возвращает голову обновлённого списка.
//     Внимание: в этой задаче не нужно считывать входные данные.
//     Нужно написать только функцию, которая принимает на вход голову списка и номер удаляемого элемента и возвращает голову обновлённого списка.

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

function solution(node, idx) {
    let srcIndex = 0;
    const head = node
    let prevItem = null;

    if (idx === 0) {
        return node.next;
    }

    while (srcIndex <= idx + 1) {
        if (srcIndex === idx - 1) prevItem = node;

        node = node?.next;
        srcIndex += 1;
    }

    prevItem.next = prevItem.next.next;

    return head;
}

// vyoe mc
// iiwajidvfg dcqil xhbsyc
// n kkt yb ct
// hja
// ud jjfmsat
// 0
function test() {
    var node4 = new Node("ud jjfmsat");
    var node3 = new Node("hja", node4);
    var node2 = new Node("n kkt yb ct", node3);
    var node1 = new Node("iiwajidvfg dcqil xhbsyc", node2);
    var node0 = new Node("vyoe mc", node1);
    var newHead = solution(node0, 0);

    while (newHead) {
        console.log(newHead?.value + " " + newHead?.next)
        newHead = newHead.next;
    }
}

test();