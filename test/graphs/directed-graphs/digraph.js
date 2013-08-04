// Node.js tests
var buster = require("buster");
buster.spec.expose();
var Digraph = require("../../../src/graphs/directed-graphs/digraph.js").Digraph;

buster.testCase("A module", {
    "states the obvious": function () {
        assert(false);
    },
    "Digraph is available" : function () {
    	assert(!!Digraph)
    },
});