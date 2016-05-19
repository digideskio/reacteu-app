var React = require('react');
var { Transitions } = require('../../../touchstone');

var OnboardingEnterCode = require('../../../components/Onboarding/enter-code');

module.exports = React.createClass({
	mixins: [Transitions],
	contextTypes: { dataStore: React.PropTypes.object.isRequired },

	onCodeEnter (ticketCode, callback) {
		dataStore.activate(ticketCode, function (err) {
			dataStore.synchronize();
			callback(err);
		});
	},

	render () {
		return (
			<OnboardingEnterCode
				id="main-event"
				onCodeEnter={this.onCodeEnter}
				nextScreen="app:onboarding-workshop"
				title="Main Event"
				transition="show-from-right"
			/>
		);
	}
});
