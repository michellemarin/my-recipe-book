App.EditRecipeRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('recipe' , params.id);
  }
});
