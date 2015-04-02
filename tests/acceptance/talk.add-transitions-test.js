import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'awesome-talks/tests/helpers/start-app';

var application;

module('Acceptance: Talk.Add.Transitions', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('Transitional Flow Test', function(assert) {
  visit('/talks/add');

  andThen(() => {
    assert.equal(currentPath(), 'login');
    assert.equal(find('form').length, 1);
    fillIn('#input-username', 'Alex');
    click('input[type=submit]');

    andThen(() => {
      assert.equal(currentPath(), 'talk.add');
      assert.equal(currentURL(), '/talks/add');

      visit('/');
      click('.jumbotron .btn.btn-primary.btn-lg');

      andThen(() => {
        assert.equal(currentURL(), '/talks/add');
      });
    });

  });
});    