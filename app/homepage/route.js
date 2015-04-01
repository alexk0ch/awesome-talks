import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
      {
        title : 'Welcome to EmberJS',
        url : 'http://emberjs.com/images/about/ember-productivity-sm.png'
      },
      {
        title : 'Welcome to AngularJS',
        url : 'https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w749-h794/AngularJS-Shield-large.png'
      },
      {
        title : 'Welcome to ReactJS',
        url : 'http://repo.tiye.me/react-collections/images/react-logo-1000-transparent.png'
      }
    ];
  }
});
