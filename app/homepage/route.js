import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
      {id: 11, title: 'Ember in Action'},
      {id: 12, title: 'Title 2'},
      {id: 13, title: 'Title 3'}
    ];
  }
});
