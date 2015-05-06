window.App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

//Todos.ApplicationAdapter = DS.FixtureAdapter.extend();

App.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'wm-emberjs'
});