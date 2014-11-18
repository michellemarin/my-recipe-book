App = Ember.Application.create({
  LOG_TRANSITIONS: true
}
);

App.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://flickering-torch-3666.firebaseio.com/')
});


$("#myForm").validate( {
  rules: {
    title: {
      required: true
    },
    description: {
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
