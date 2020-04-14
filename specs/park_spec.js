const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park
  let dinosaur
  let dinosaur2

  beforeEach(function () {
    park = new Park('Dinosaur Park', 40, [dinosaur]);
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('tanius', 'herbivore', 30);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Dinosaur Park');
});

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.equal(actual, 40);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurArray;
    assert.deepStrictEqual(actual, [dinosaur]);
  });

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
