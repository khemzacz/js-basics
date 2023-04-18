const _count = new WeakMap();
const _items = new WeakMap();


class Stack {
    constructor() {
        _count.set(this, 0);
        _items.set(this, []);
    }

    push(item) {
        _items.get(this).push(item);
        _count.set(this, _count.get(this) + 1);
    }

    pop() {
        if (_count.get(this) < 1) {
            throw new Error('Nothing to pop.');
        }
        _count.set(this, _count.get(this) - 1);
        return _items.get(this).pop();
    }

    peek() {
        if (_count.get(this) < 1) {
            throw new Error('Nothing to peek.');
        }
        return _items.get(this).at(_items.get(this).length - 1);
    }

    get count() {
        return _count.get(this);
    };
}