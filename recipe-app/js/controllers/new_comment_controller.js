App.RecipeNewCommentController = Ember.ObjectController.extend({
  markedText: function () {
    return marked(this.get('text') || '');
  }.property('text'),

  needs: ['recipe'],
  actions: {
    save: function () {
      console.log('save click comment');
      if (!this.get('text')) { return; }
        var comment = this.store.createRecord('comment', {
          name: this.get('name'),
          email: this.get('email'),
          date: (new Date()).toDateString(),
          text: this.get('text')
        });
        comment.save();

        var recipe = this.get('controllers.recipe.model');
        recipe.get('comments').pushObject(comment);
        recipe.save();

        this.transitionToRoute('recipe', recipe.id);
    }
  }
});
