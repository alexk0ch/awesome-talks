import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'awesome-talks/tests/helpers/start-app';

var application;

module('Acceptance: Homepage', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('homepage', function(assert) {
  visit('/');

  andThen(function() {
    //assert.equal(currentPath(), 'homepage');
    assert.equal(find('.talk-list .talk-badge').length, 3);
    assert.equal(find('.talk-list .talk-badge:eq(0)').text().trim(), 'Ember in Action');
    click('.talk-list .talk-badge:eq(0) a');
    andThen(()=>{
      assert.equal(currentPath(), 'talk');
      assert.equal(currentURL(), '/talks/11');
    });
  });
});
