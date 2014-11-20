App.Recipe = DS.Model.extend({
    title      : DS.attr('string'),
    description: DS.attr('string'),
    category   : DS.attr('number'),

    markedDescription: function () {
      return marked(this.get('description') || '');
    }.property('description'),

    imgURL     : DS.attr('string'),
    items      : DS.attr('string'),//Make this a hasMany later
    steps      : DS.attr('string'),
    comments   : DS.hasMany('comment', {async: true})
});
