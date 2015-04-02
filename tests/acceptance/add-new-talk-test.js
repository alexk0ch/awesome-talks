import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'awesome-talks/tests/helpers/start-app';

var application;

module('Acceptance: AddNewTalk', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /add-new-talk', function(assert) {
  visit('/add-new-talk');

  andThen(function() {
    assert.equal(currentPath(), 'add-new-talk');
  });
});
