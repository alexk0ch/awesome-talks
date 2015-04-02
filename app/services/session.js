import Ember from 'ember';

export default Ember.Service.extend({
  user: 'Alex', 

  isLoggedIn: Ember.computed.notEmpty('user')

});
