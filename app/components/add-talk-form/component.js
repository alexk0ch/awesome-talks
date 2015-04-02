import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addTalk (title, content) {
      this.sendAction('onAddTalk', { title, content: content.trim().split('\n') });
    }
  }
});
