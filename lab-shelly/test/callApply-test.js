'use strict';

const assert = require('assert');
const callApply = require('../lib/callApply.js');

describe('callApply.js', function() {
  describe('#Pet', function() {
    let animal = new callApply.Pet('Binky', 'turtle');
    it('should return an object', function() {
      assert.equal(typeof animal, 'object');
    });
    it('should return a string', function() {
      assert.equal(typeof callApply.Pet('Binky', 'turtle'), 'string');
    });
    it('should return Binky is a turtle', function() {
      assert.equal(callApply.Pet('Binky', 'turtle'), 'Binky is a turtle');
    });
  });

  describe('#Cat', function() {
    let kitty = new callApply.Cat('Tunafish', 'cat');
    it('should return an object', function() {
      assert.equal(typeof kitty, 'object');
    });
    it('should have property of isFluffy', function() {
      assert.equal(kitty.hasOwnProperty('isFluffy'), true);
    });
    it('should have property of treat', function() {
      assert.equal(kitty.hasOwnProperty('treat'), true);
    });
    it('should return a string', function() {
      assert.equal(typeof callApply.Cat('Tunafish', 'cat'), 'string');
    });
    it('should return Tunafish is a cat', function() {
      assert.equal(callApply.Cat('Tunafish', 'cat'), 'Tunafish is a cat who likes catnip');
    });
  });

  describe('#Fish', function() {
    let fish = new callApply.Fish('Goldie', 'goldfish');
    it('should return an object', function() {
      assert.equal(typeof fish, 'object');
    });
    it('should have property of isFluffy', function() {
      assert.equal(fish.hasOwnProperty('isFluffy'), false);
    });
    it('should have property of treat', function() {
      assert.equal(fish.hasOwnProperty('treat'), true);
    });
    it('should return a string', function() {
      assert.equal(typeof callApply.Fish('Tunafish', 'cat'), 'string');
    });
    it('should return Goldie is a goldfish', function() {
      assert.equal(callApply.Fish('Goldie', 'goldfish'), 'Goldie is a goldfish who likes worms');
    });
  });

  describe('greet', function() {
    it('should return meow', function() {
      assert.equal(callApply.greeting.sayHi(), 'meow');
    });
    let getGreet = callApply.greeting.sayHi;
    let boundGreeting = getGreet.bind(callApply.greeting);
    it('should return meow', function() {
      assert.equal(boundGreeting(), 'meow');
    });
  });
});



 //should return undefined
  // let boundGreeting = getGreet.bind(greeting);
  // boundGreeting(); //should return meow
