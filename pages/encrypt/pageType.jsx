var React = require('react');
var pageTypes = {
	'social': require(`./social.jsx`),
	'direct': require(`./direct.jsx`),
	'hybrid': require(`./hybrid.jsx`)
}

var PageType = React.createClass({
	propTypes: {
		params: React.PropTypes.object.isRequired
	},
	render: function() {
		var Page;
        console.log(this.props.params);
        if(this.props.params.type == 'direct' && this.props.params.video == '4'){
            Page = pageTypes.hybrid;
        } else if(this.props.params && pageTypes[this.props.params.type]){
			Page = pageTypes[this.props.params.type]
		} else {
			Page = pageTypes.social;
		}
		return (
		  <div>
			  <Page params={this.props.params}/>
		  </div>
		);
	}
});

module.exports = PageType;