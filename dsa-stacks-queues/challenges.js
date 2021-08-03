const Deque = require("./deque");

/** Challenges
For these challenges, use either a stack or a queue (or a combination of both!)
*/

/** Browser Back/Forward
Design how you could design a browser back/forward system using two stacks, so that you can visit a series of sites (Google, Yahoo, EBay, go back to Yahoo, then forward again to EBay, then onto Apple, and so on).

//Stack #1 push each visited web URL onto the bottom of the stack (pushing the older websites towards the top of the stack)

//When a user attempts to move backwards (back to the previous page) the current web URL is popped off of the end of Stack #1 then pushed onto the top of stack #2.

//When a user attempts to move forward, the web url is popped off the top of Stack #2 then pushed to the end of Stack #1.


Write pseudo-code for this. */

/** String Reversal
Write a function that reverses a string by handling one letter at a time. You cannot use an arrays, nor can you use any string-reversal built-in method.  */

function reverseString(string) {
    let reversedString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }

    //O(n)
    return reversedString;
}

console.log(reverseString('abcdefghijklmnopqrstuvwxyz')); //zyxwvutsrqponmlkjihgfedcba
console.log(reverseString('zyxwvutsrqponmlkjihgfedcba')); //abcdefghijklmnopqrstuvwxyz

/** Balanced Brackets?
Write a function that is passed a string which can contain any text, including different kinds of brackets: {} [] ().

It should examine the string and decide if the string is “balanced” — a balanced string is one where the different kinds of brackets are properly balanced, such that you never close an bracket that isn’t opened, is out of order, or end up with unclosed brackets.

Examples of balanced strings:

hello (no brackets)
(hi) [there]
(hi [there])
(((hi)))
Imbalanced:

(hello (bracket left open at end)
(nope] (wrong type closed)
((ok) [nope)] (closed out of order) */

function imbalancedBrackets(string) {
    let open = ['(', '[', '{'];
    let closed = [')', ']', '}'];
    let stack = [];
    let openCount = 0;
    let closedCount = 0;

    for (let char of string){
        if (open.includes(char)) {
            openCount++;
            stack.push(char);
        } else if (closed.includes(char)) {
            closedCount++;
            let parens = stack.pop();
            if (parens === '(' && char !== ')') return false;
            if (parens === '[' && char !== ']') return false;
            if (parens === '{' && char !== '}') return false;
        }
    }

    //if there are mismatching or missing parens
    if (openCount !== closedCount) return false;
    return true;
}

console.log(imbalancedBrackets('hello')); //true
console.log(imbalancedBrackets('(hi) [there]')); //true
console.log(imbalancedBrackets('(hi [there])')); //true
console.log(imbalancedBrackets('(((hi)))')); //true
console.log(imbalancedBrackets('(hello')); //false
console.log(imbalancedBrackets('((ok) [nope)]')); //false

/** Josephus Survivor
This is a classic algorithm problem, based on a Biblical-era tale.

Imagine a group of 10 people in a circle, numbered 1 to 10. If we started at the first person (#1) and killed every three people, it would look like this:

1  2  3  4  5  6  7  8  9  10
      !        !        !
This continues, though, looping around again, starting with where we left of at #10 (we’ll mark the freshly-removed as red/! and the previously-removed in striked-out gray/X):

1  2  3  4  5  6  7  8  9  10
   !  X        X  !     X
And again, starting where that left off, at #8, and continuing:

1  2  3  4  5  6  7  8  9  10
!  X  X        X  X  !  X

1  2  3  4  5  6  7  8  9  10
X  X  X     !  X  X  X  X

1  2  3  4  5  6  7  8  9  10
X  X  X     X  X  X  X  X  !
At this point, only #4 remains, so that person would be our “survivor”.

Write an algorithm that, given a number of people, and the “skip”, which person will be the survivor.

For example:

find_survivor(10, 3) // 4
There are different ways you can solve this, but a good solution uses one of the structures covered in this exercise. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}

function findSurvivor(nums, skip) {
    let headNode = new Node(1);
    let previousNode = headNode;

    for  (let i = 2; i <= nums; i++) {
        let newNode = new Node(i);
        previousNode.next = newNode;
        previousNode = previousNode.next;
    }

    //connect the last node to the head node
    previousNode.next = headNode;

    let pointer1 = headNode;
    let pointer2 = headNode;

    while (pointer1.next !== pointer1) {
        let count = 1;
        while (count !== skip) {
            pointer2 = pointer1;
            pointer1 = pointer1.next;
            count++;
        }

        pointer2.next = pointer1.next;
        pointer1 = pointer2.next;
    }

    return pointer1.val;
}

console.log(findSurvivor(10, 3)); //4
console.log(findSurvivor(5, 2)); //3
console.log(findSurvivor(14, 2)); //13