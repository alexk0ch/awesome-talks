import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
      {id: 1, title: 'Lorem ipsum dolor.'},
      {id: 2, title: 'Lorem ipsum dolor sit amet.'},
      {id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'}
    ];
  }
});
