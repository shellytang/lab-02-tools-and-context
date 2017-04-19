'use strict';

module.exports = exports = {};

exports.Pet = function(name, type) {
  this.name = name;
  this.type = type;
  return `${name} is a ${type}`
};
//call example
exports.Cat = function(name, type) {
  exports.Pet.call(this, name, type);
  this.isFluffy = true;
  this.treat = 'catnip';
  return `${name} is a ${type} who likes ${this.treat}`
};
//apply example
exports.Fish = function(name, type) {
  exports.Pet.apply(this, [name, type]);
  this.isFluffly = false;
  this.treat = 'worms';
  return `${name} is a ${type} who likes ${this.treat}`
}
//bind example - used example similar to MPN documentation(creating bound function)
exports.greeting = {
  greet: 'meow',
  sayHi: function() {
    return this.greet;
  }
};
