App.IndexRoute = App.ApplicationRoute.extend({
  model: function () {
    return this.store.find('recipe');
  }
});

App.IndexController = Ember.ArrayController.extend({
  sortProperties: ['title'],
  actions: {
    sortToggle: function () {
      this.set('sortAscending', !this.get('sortAscending'));
    },
    upvote: function (recipe) {
      recipe.incrementProperty('rank');
    },
    downvote: function (recipe) {
      recipe.decrementProperty('rank');
    }
  }
});
