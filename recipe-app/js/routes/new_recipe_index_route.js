App.NewRecipeIndexRoute = App.AuthenticationRoute.extend({
  model: function () {
    return this.store.find('ingredient');
  }
});
