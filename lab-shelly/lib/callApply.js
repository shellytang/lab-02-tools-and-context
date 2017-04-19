'use strict';

module.exports = exports = {};

exports.Pet = function(name, type) {
  this.name = name;
  this.type = type;
  return `${name} is a ${type}`
};

exports.Cat = function(name, type) {
  exports.Pet.call(this, name, type);
  this.isFluffy = true;
  this.treat = 'catnip';
  return `${name} is a ${type} who likes ${this.treat}`
};

exports.Fish = function(name, type) {
  exports.Pet.call(this, name, type);
  this.isFluffly = false;
  this.treat = 'worms';
  return `${name} is a ${type} who likes ${this.treat}`
}
