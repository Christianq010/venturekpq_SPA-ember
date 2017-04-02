import Ember from 'ember';

export default Ember.Component.extend({
    emailAddress: '',

    //Check validity of String used as an Email Address
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),

    actions: {

        saveEmail() {
            alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
            this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
            this.set('emailAddress', '');
        }
    }
});