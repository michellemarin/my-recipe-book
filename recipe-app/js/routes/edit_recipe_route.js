App.EditRecipeRoute = App.AuthenticationRoute.extend({
  model: function (params) {
    return this.store.find('recipe' , params.id);
  }
});
