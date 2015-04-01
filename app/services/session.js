import Ember from 'ember';

export default Ember.Service.extend({
  user: null, 

  isLoggedIn: function () { 
    return !!this.get('user');
  }

});
