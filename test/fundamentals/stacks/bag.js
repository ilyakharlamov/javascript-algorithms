// Node.js tests
var buster = require("buster");
buster.spec.expose();
var Bag = require("../../../src/fundamentals/stacks/bag.js").Bag;

buster.testCase("fundamentals/stacks/bag", {
	"states the obvious": function () {
		assert(true);
	},
	"Bag is available" : function () {
		assert(!!Bag)
	},
	"basic checks" : function () {
		var bag = new Bag();
		assert(bag.isEmpty());
		assert.equals(0, bag.size());
		bag.add({});
		assert.equals(1, bag.size());
		var anotherbag = new Bag();
		assert(anotherbag.isEmpty());
		assert.equals(0, anotherbag.size());
	},
});