App = Ember.Application.create({
  LOG_TRANSITIONS: true
}
);

App.Firebase = new Firebase('https://flickering-torch-3666.firebaseio.com/');

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: App.Firebase
});

App.CATEGORIES = [
  {id: '1', name: 'Breakfast'},
  {id: '2', name: 'Lunch'},
  {id: '3', name: 'Snack'},
  {id: '4', name: 'Supper'},
  {id: '5', name: 'Dessert'},
  {id: '6', name: 'cocktail'},
  {id: '7', name: 'fancy pants'}
];

App.RecipeFormComponent = Ember.Component.extend({
  markedDescription: function () {
    return marked((this.get('recipe description')) || '');
  }.property('recipe.description')
});


$("#myForm").validate( {
  rules: {
    title: {
      required: true
    },
    description: {
      required: true
    },
    category: {
      required: true
    },
    imgURL: {
      required: true,
      url: true
    },
    items: {
      required: true
    },
    steps: {
      required: true
    }
  }

});
