import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        submit: function() {
            alert('Thank you, your message is being processed');
        }
    }
});