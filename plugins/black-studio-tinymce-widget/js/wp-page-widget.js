/* Black Studio TinyMCE Widget - Compatibility with WP Page Widget plugin */

/* global bstw */

(function( $ ) {

	$( document ).ready(function() {

		// Event handler for widget save button
		$( document ).on( 'click', '#pw-sidebars-customize div[id*=black-studio-tinymce].widget input.widget-control-save', function() {
			$( this ).unbind( 'ajaxSuccess' ).ajaxSuccess(function( ) {
				$( this ).trigger( 'widget-updated', [ bstw( $( this ) ).get_widget() ] ).unbind( 'ajaxSuccess' );
			});
		});

		// Event handler for widget open button
		$( document ).on( 'click', '#pw-sidebars-customize div[id*=black-studio-tinymce].widget .widget-title', function() {
			var $textarea = bstw( $( this ) ).get_textarea();
			if ( $textarea.hasClass( 'active' ) ) {
				bstw( $( this ) ).deactivate();
				$( this ).trigger( 'widget-added', [ bstw( $( this ) ).get_widget() ] );
			}
		});

	});
		
})( jQuery ); // end self-invoked wrapper function
