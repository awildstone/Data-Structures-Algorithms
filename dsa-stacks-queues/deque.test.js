const Deque = require('./deque');

let deque;

beforeEach(function() {
    deque = new Deque();
});

describe("appendleft", function() {
    it ("adds a node/value to the beginning of a deque", function() {
        deque.appendleft(5);
        expect(deque.size).toEqual(1);
        expect(deque.first.val).toEqual(5);
        expect(deque.last.val).toEqual(5);

        deque.appendleft(10);
        expect(deque.size).toEqual(2);
        expect(deque.first.val).toEqual(10);
        expect(deque.last.val).toEqual(5);
    });

    it("returns undefined", function() {
        expect(deque.appendleft(5)).toBe(undefined);
    });
});

describe("appendright", function() {
    it("adds a node/value to the end of a deque", function() {
        deque.appendright(5);
        expect(deque.size).toEqual(1);
        expect(deque.first.val).toEqual(5);
        expect(deque.last.val).toEqual(5);

        deque.appendright(10);
        expect(deque.size).toEqual(2);
        expect(deque.first.val).toEqual(5);
        expect(deque.last.val).toEqual(10);
    });

    it("returns undefined", function() {
        expect(deque.appendright(5)).toBe(undefined);
    });
});

describe("popleft", function() {
    it("removes a node/value from the beginning of the deque", function() {
        deque.appendleft(3);
        deque.appendleft(2);
        deque.appendleft(1);
        expect(deque.size).toEqual(3);
        expect(deque.first.val).toEqual(1);
        expect(deque.first.next.val).toEqual(2);
        expect(deque.last.val).toEqual(3);

        deque.popleft();
        expect(deque.size).toEqual(2);
        expect(deque.first.val).toEqual(2);
        expect(deque.last.val).toEqual(3);

        deque.popleft();
        expect(deque.size).toEqual(1);
        expect(deque.first.val).toEqual(3);
        expect(deque.last.val).toEqual(3);

        deque.popleft();
        expect(deque.size).toEqual(0);
        expect(deque.first).toEqual(null);
        expect(deque.last).toEqual(null);
    });

    it("returns the value of the node removed", function() {
        deque.appendleft(3);
        deque.appendleft(2);
        deque.appendleft(1);

        expect(deque.popleft()).toBe(1);
        expect(deque.popleft()).toBe(2);
        expect(deque.popleft()).toBe(3);
    });

    it("throws an error if the deque is empty", function() {
        expect(() => deque.popleft()).toThrowError();
    });
});

describe("popright", function() {
    it("removes a node/value from the end of the deque", function() {
        deque.appendright(5);
        deque.appendright(10);
        deque.appendright(15);
        expect(deque.size).toEqual(3);
        expect(deque.first.val).toEqual(5);
        expect(deque.first.next.val).toEqual(10);
        expect(deque.last.val).toEqual(15);

        deque.popright()
        expect(deque.size).toEqual(2);
        expect(deque.first.val).toEqual(5);
        expect(deque.last.val).toEqual(10);

        deque.popright()
        expect(deque.size).toEqual(1);
        expect(deque.first.val).toEqual(5);
        expect(deque.last.val).toEqual(5);

        deque.popright()
        expect(deque.size).toEqual(0);
        expect(deque.first).toEqual(null);
        expect(deque.last).toEqual(null);
    });

    it("returns the value of the node removed", function() {
        deque.appendright(5);
        deque.appendright(10);
        deque.appendright(15);

        expect(deque.popright()).toEqual(15);
        expect(deque.popright()).toEqual(10);
        expect(deque.popright()).toEqual(5);
    });

    it("throws an error if the deque is empty", function() {
        expect(() => deque.popright()).toThrowError();
    });
});

describe("peekleft", function() {
    it("returns the value of the first node in the deque", function() {
        deque.appendleft(3);
        deque.appendleft(2);
        deque.appendleft(1);

        expect(deque.peekleft()).toEqual(1);
        deque.popleft()
        expect(deque.peekleft()).toEqual(2);
    });
});

describe("peekright", function() {
    it("returns the value of the last node in the deque", function() {
        deque.appendright(5);
        deque.appendright(10);
        deque.appendright(15);

        expect(deque.peekright()).toEqual(15);
        deque.popright()
        expect(deque.peekright()).toEqual(10);
    });
});

describe("isempty", function() {
    it("returns true when the deque is empty", function() {
        expect(deque.isEmpty()).toBe(true);
    });

    it("returns false when the deque has values", function() {
        deque.appendright(5);
        expect(deque.isEmpty()).toBe(false);
    });
});