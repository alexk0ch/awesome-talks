import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('homepage', { path: '/' });
  this.route('talk', { path: 'talks/:talks_id'});
});

export default Router;
