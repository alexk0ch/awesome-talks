import Ember from 'ember';

export default Ember.Route.extend({
  
  beforeModel (transition) {
    if (!this.session.get('isLoggedIn')) {
      this.session.set('attemptedTransition', transition);
      this.transitionTo('login');
    }
  },

  actions: {
    addTalk (newTalk) {
      let newTalkRecord = this.store.createRecord('talk', newTalk);
      newTalkRecord.save().then(() => { this.transitionTo('talk', newTalkRecord); });
    }
  }
  
});
