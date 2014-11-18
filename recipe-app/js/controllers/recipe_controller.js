App.RecipeController = Ember.ObjectController.extend({
    itemCount: Ember.computed.alias('splitItems.length'),
    stepCount: Ember.computed.alias('splitSteps.length'),

    showSteps: true,
    showItems: true,

    splitSteps: function () {
        return this.get('steps').split(',');
    }.property('steps'),

    splitItems: function () {
        return this.get('items').split(',');
    }.property('items'),

    markedDescription: function () {
        return marked(this.get('description'));
    }.property('description'),

    actions: {
        toggleSteps: function () {
            this.toggleProperty('showSteps');
        },
        toggleItems: function () {
            this.toggleProperty('showItems');
        },
        destroy: function () {
          if (confirm ('are you sure you want to delete this recipe?')) {
            this.get('model').deleteRecord();
            this.get('model').save();
            this.transitionToRoute('index');
          }            
        }
    }
});
