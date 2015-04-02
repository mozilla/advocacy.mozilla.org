/* Black Studio TinyMCE Widget - JS - Admin pointer */

/* global bstw_pointers, ajaxurl */

jQuery( document ).ready( function( $ ) {
	bstw_open_pointers( 0 );
	function bstw_open_pointers( i ) {
		var pointer = bstw_pointers.pointers[i],
			options = $.extend( pointer.options, {
			close: function() {
				$.post( ajaxurl, {
					pointer: pointer.pointer_id,
					action: 'dismiss-wp-pointer'
				});
			}
		});
		$( pointer.target ).pointer( options ).pointer( 'open' );
	}
});
