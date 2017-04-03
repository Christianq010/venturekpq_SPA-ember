import Ember from 'ember';

export default Ember.Controller.extend({
    responseMessage: '',
    emailAddress: '',

    //Check validity of String used as an Email Address
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),

    actions: {

        saveEmail() {
            const email = this.get('emailAddress');

            const newSubscription = this.store.createRecord('subscription-model', {
                email: email
            });

            newSubscription.save().then((response) => {
                this.set('responseMessage', `Thank you! We've just saved your email address`);
                this.set('emailAddress', '');
            });
        }
    }
});
