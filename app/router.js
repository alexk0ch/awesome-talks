import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('homepage', { path: '/' });
  this.resource('talk.add', {path: '/talks/add'});
  this.resource('talk', {path: '/talks/:id'});
  this.route('login');
}); 
  