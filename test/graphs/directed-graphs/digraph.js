/*global assert, require*/
// Node.js tests
"use strict";
var buster = require("buster");
buster.spec.expose();
var Digraph = require("../../../src/graphs/directed-graphs/digraph.js").Digraph;
buster.testCase("digraph", {
	"states the obvious": function () {
		assert(true);
	},
	"Digraph is available" : function () {
		assert(!!Digraph)
	},
	"Basic digraph check" : function () {
		var digraph0 = new Digraph(0);
		assert.equals(0, digraph0.V());
	},
	"tinyDAG" : function () {
		var v = 13,
			i,
			len,
			pair,
			digraph,
			reverse,
			tinyDAG = [ [4, 2 ],
						[2, 3 ],
						[3, 2 ],
						[6, 0 ],
						[0, 1 ],
						[2, 0 ],
						[11, 12],
						[12, 9],
						[9, 10 ],
						[9, 11 ],
						[7, 9 ],
						[10, 12],
						[11, 4],
						[4, 3 ],
						[3, 5 ],
						[6, 8 ],
						[8, 6 ],
						[5, 4 ],
						[0, 5 ],
						[6, 4 ],
						[6, 9 ],
						[7, 6 ]];
		digraph = new Digraph(13);
		for (i = 0, len = tinyDAG.length; i < len; i++) {
			pair = tinyDAG[i];
			digraph.addEdge(pair[0], pair[1]);
		}
		assert.equals(digraph.V(), 13);
		assert.equals(digraph.E(), tinyDAG.length);
		assert.equals(digraph.adj(0).size(), 2);
		digraph=digraph.reverse();
		
	},

});