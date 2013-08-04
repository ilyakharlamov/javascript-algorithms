/*global require*/
var exports = exports || {};
(function class_private_immediate_invoke() {
	"use strict";
	var Bag = require("../../../src/fundamentals/stacks/bag.js").Bag;
	/**
	 * [The Digraph class represents an directed graph of vertices
	 *  named 0 through V-1.
	 *  It supports the following operations: add an edge to the graph,
	 *  iterate over all of the neighbors incident to a vertex.
	 *  Parallel edges and self-loops are permitted.
	 *  <p>
	 *  For additional documentation,
	 *  see <a href="http://algs4.cs.princeton.edu/42directed">Section 4.2</a> of
	 *  <i>Algorithms, 4th Edition</i> by Robert Sedgewick and Kevin Wayne.]
	 * Create an empty digraph with vertsize vertices
	 * @param {[type]} vertsize
	 */
	function Digraph(vertsize) {
		var i;
		if (typeof vertsize !== "number" || vertsize < 0) {
			throw new Error("Number of vertices in a Digraph must be nonnegative");
		}
		this._V = vertsize;
		this._E = 0;
		this._adj = [];
		for (i = 0; i < vertsize; i++) {
			this._adj[i] = new Bag();
		}
	}
	/**
	 * Return the number of vertices in the digraph.
	 */
	Digraph.prototype.V = function () {
		return this._V;
	};
	/**
	 * Return the number of edges in the digraph.
	 */
	Digraph.prototype.E = function () {
		return this._E;
	};
	/**
	 * Add the directed edge v->w to the digraph.
	 * @param  {number} v
	 * @param  {number} w
	 * @return undefined
	 */
	Digraph.prototype.addEdge = function (v, w) {
		if (v < 0 || v >= this._V) {
			throw new Error("IndexOutOfBoundsException: vertex " + v + " is not between 0 and " + (this._V - 1));
		}
		if (w < 0 || w >= this._V) {
			throw new Error("IndexOutOfBoundsException: vertex " + w + " is not between 0 and " + (this._V - 1));
		}
		this._adj[v].add(w);
		this._E++;
	};

	exports.Digraph = Digraph;
})();
