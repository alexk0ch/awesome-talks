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
    assert.equal(find('.sidebar-brand a').text().trim(), 'Home');
    click('.talk-list .talk-badge:eq(0) a');
    andThen(() => {
      assert.equal(currentURL(), '/talks/1');
    });
  });
});

test('homepage to talk.add navigation exists', function (assert) {
  visit('/');

  andThen(function() {
    let toTalkAddButton = find('.jumbotron .btn.btn-primary.btn-lg');
    assert.equal(toTalkAddButton.length, 1);
  });
});
