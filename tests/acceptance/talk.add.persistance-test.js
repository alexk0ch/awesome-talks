import Ember from 'ember';
import $ from 'jquery';
import {
  module,
  test
} from 'qunit';
import startApp from 'awesome-talks/tests/helpers/start-app';

var application;

module('Acceptance: Talk.Add.Persistance', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('Talk.Add should persist data on server and redirect you to new route', function(assert) {
  visit('/login');

  fillIn('#input-username', 'Alex');
  click('input[type=submit]');

  andThen(function() {
    assert.equal(currentURL(), '/');
    visit('/talks/add');

    fillIn('#input-title', 'New Talk');
    fillIn('#input-content', 'New Content \nNew Content');
    click('input[type=submit]');

    andThen(() => {
      assert.equal(/talks/.test(currentURL()), true);
      assert.equal(find('.talk-badge').length, 4);
      $.ajax({
        url: 'http://localhost:4200/api/talks/' + currentURL().split('/').pop(),
        type: 'DELETE'
      });     
    });
  });
});
