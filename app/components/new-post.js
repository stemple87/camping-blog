import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    save1() {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        body: this.get('body'),
        image: this.get('image'),
      };
      this.set('addNewPost', false);
      this.sendAction('save2', params);
    }
  }
});
