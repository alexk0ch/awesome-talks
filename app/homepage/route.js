import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
      {id: 1, title: 'Title 1'},
      {id: 2, title: 'Title 2'},
      {id: 3, title: 'Title 3'}
    ];
  }
});
