Tinytest.add('is defined', function (test) {
  test.isNotUndefined(Session);
});

Meteor.methods({
  getStore() {
    return Session.store;
  }
});

// TODO how to set up DDP connection during test
Tinytest.add('store', function (test) {
  Meteor.call('getStore', function(e, r) {
    console.log('store', e, r);
  });
});

Tinytest.add('get', function (test) {

});

Tinytest.add('set', function (test) {

});

Tinytest.add('equals', function (test) {

});
