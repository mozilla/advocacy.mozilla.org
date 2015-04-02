/* Black Studio TinyMCE Widget - JS - Editor setup */

/* global bstw, tinyMCEPreInit */

( function( $ ) {

	function bstw_editor_setup( ed ) {
		ed.on( 'keyup change', function() {
			if ( bstw( ed.id ).get_mode() === 'visual' ) {
				bstw( ed.id ).update_content();
			}
			$( '#' + ed.id ).change();
		});
		$( '#' + ed.id ).addClass( 'active' ).removeClass( 'activating' );
	}

	var id;
	for ( id in tinyMCEPreInit.mceInit ) {
		if ( id.search( 'black-studio-tinymce' ) >= 0 ) {
			tinyMCEPreInit.mceInit[ id ].setup = bstw_editor_setup;
		}
	}

}( jQuery ));
