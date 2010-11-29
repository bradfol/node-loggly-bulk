/*
 * interns-test.js: Tests for Loggly interns utility module
 *
 * (C) 2010 Charlie Robbins
 * MIT LICENSE
 *
 */
 
var path = require('path'),
    eyes = require('eyes'),
    vows = require('vows'),
    assert = require('assert');
    
require.paths.unshift(path.join(__dirname, '..', 'lib'));

var interns = require('loggly/interns');

vows.describe('node-loggly/loggly/interns').addBatch({
  "When using the interns module": {
    "the clone() method": {
      topic: function () {
        this.obj = {
          name: 'interns',
          deep: {
            first: 'first',
            second: 'second'
          }
        };
        return interns.clone(this.obj);
      },
      "should return a deep clone of the object": function (clone) {
        assert.isFalse(this.obj.deep === clone.deep);
      }
    }
  }
}).export(module);