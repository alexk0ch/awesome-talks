import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  port: '4200',
  namespace: 'api'
});
