const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dino1;
  let dino2;
  let dino3;

  beforeEach(function () {
    park = new Park('Jurassic Park', 10);

    dino1 = new Dinosaur('t-rex', 'carnivore', 30);
    dino2 = new Dinosaur('steggy', 'herivore', 50);
    dino3 = new Dinosaur('terradact', 'carnivore', 40);




  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function () {

    const actual = park.collection.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function (){
    park.addDino(dino1);
    const actual = park.collection.length;
    assert.strictEqual(actual, 1);

  });

  it('should be able to remove a dinosaur from its collection', function (){
    park.addDino(dino2);
    park.addDino(dino3);
    park.deleteDino(dino2);
    const actual = park.collection.length;
    assert.strictEqual(actual, 1);
    });

  it('should be able to find the dinosaur that attracts the most visitors', function (){
    park.addDino(dino1)
    park.addDino(dino2);
    park.addDino(dino3);
    const actual = park.dinoMostVis();
    assert.strictEqual(actual, dino1);
//started this but did not finish,head burst.
  });


  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
