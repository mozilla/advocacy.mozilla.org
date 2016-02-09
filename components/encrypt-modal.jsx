var React = require(`react`);

module.exports = React.createClass({
	componentDidMount: function() {
		document.addEventListener("keydown", (e) => {
			if(e.keyCode == 27){
				this.props.hideModal();
			}
		});
	},
	checkEventTarget: function(e) {
		if(e.target == e.currentTarget){
			this.props.hideModal();
		}
	},
  render: function() {
    return (
    	<div className={this.props.className}>
		    <div className="modal-overlay" onClick={this.checkEventTarget}>
	        <div className="modal" aria-role="dialog">
	        	<i className="fa fa-times-circle modal-close" onClick={this.props.hideModal} aria-label="Close Modal"></i>
	          {this.props.children}
	        </div>
	      </div>
      </div>
    );
  }
});
