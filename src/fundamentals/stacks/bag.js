var exports = exports || {};
(function class_private_immediate_invoke() {
	"use strict";

	function Node() {
		this.item = undefined;
		this.next = undefined;
	}

	function ListIterator(current) {
		this._current = current;
	}
	ListIterator.prototype.hasNext = function hasNext() {
		return this._current !== null;
	};
	ListIterator.prototype.next = function next() {
		if (!this.hasNext()) {
			throw new Error("NoSuchElement");
		}
		var item = this._current.item;
		this._current = this._current.next;
		return item;
	};

	function Bag() {
		this._N = 0;         // number of elements in bag
		this._first = null;    // beginning of bag
	}
	Bag.prototype.isEmpty = function isEmpty() {
		return this._first === null;
	};
	Bag.prototype.size = function size() {
		return this._N;
	};
	Bag.prototype.add = function add(item) {
		var oldfirst = this._first;
		this._first = new Node();
		this._first.item = item;
		this._first.next = oldfirst;
		this._N++;
	};
	Bag.prototype.iterator = function iterator() {
		return new ListIterator(this._first);
	};

	exports.Bag = Bag;
})();
