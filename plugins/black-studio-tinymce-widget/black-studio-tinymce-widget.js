// TinyMCE initialization parameters
var tinyMCEPreInit;
// Current editor
var wpActiveEditor;

(function( $ ) {
	// Activate visual editor
	function black_studio_activate_visual_editor(id) {
		$( '#' + id ).addClass( 'mceEditor' );
		if ( typeof tinyMCE == 'object' && typeof tinyMCE.execCommand == 'function' ) {
			black_studio_deactivate_visual_editor( id );
			tinyMCEPreInit.mceInit[id] = tinyMCEPreInit.mceInit['black-studio-tinymce-widget'];
			tinyMCEPreInit.mceInit[id]['selector'] = '#' + id;
			try {
				// Instantiate new TinyMCE editor
				tinymce.init( tinymce.extend( {}, tinyMCEPreInit.mceInit['black-studio-tinymce-widget'], tinyMCEPreInit.mceInit[id] ) );
				tinyMCE.execCommand( 'mceAddControl', false, id );
			} catch( e ) {
				alert( e );
			}
			if ( tinyMCE.get( id ) != null) {
				if ( typeof tinyMCE.get( id ).on == 'function' ) {
					tinyMCE.get( id ).on( 'keyup change', function() {
						var content = tinyMCE.get( id ).getContent();
						$( 'textarea#' + id ).val( content ).change();
					});
				}
			}
		}
	}
	// Deactivate visual editor
	function black_studio_deactivate_visual_editor( id ) {
		if ( typeof tinyMCE == 'object' && typeof tinyMCE.execCommand == 'function' ) {
			if ( tinyMCE.get( id ) != null && typeof tinyMCE.get( id ).getContent == 'function' ) {
				var content = tinyMCE.get( id ).getContent();
				// tinyMCE.execCommand('mceRemoveControl', false, id);
				tinyMCE.get( id ).remove();
				$( 'textarea#' + id ).val( content );
			}
		}
	}
	// Activate editor deferred (used upon opening the widget)
	function black_studio_open_deferred_activate_visual_editor( id ) {
		$( 'div.widget-inside:has(#' + id + ') input[id^=widget-black-studio-tinymce][id$=type][value=visual]' ).each(function() {
			// If textarea is visible and animation/ajax has completed (or in accessibility mode) then trigger a click to Visual button and enable the editor
			if ( $('div.widget:has(#' + id + ') :animated' ).size() == 0 && tinyMCE.get( id ) == null && $( '#' + id ).is( ':visible' ) ) {
				$( 'a[id^=widget-black-studio-tinymce][id$=tmce]', $( this ).closest( 'div.widget-inside' ) ).click();
			}
			// Otherwise wait and retry later (animation ongoing)
			else if ( tinyMCE.get( id ) == null ) {
				setTimeout(function() {
					black_studio_open_deferred_activate_visual_editor( id );
					id = null;
				}, 100 );
			}
			// If editor instance is already existing (i.e. dragged from another sidebar) just activate it
			else {
				$( 'a[id^=widget-black-studio-tinymce][id$=tmce]', $( this ).closest( 'div.widget-inside' ) ).click();
			}
		});
	}
	
	// Activate editor deferred (used upon ajax requests)
	function black_studio_ajax_deferred_activate_visual_editor( id ) {
		$( 'div.widget-inside:has(#' + id + ') input[id^=widget-black-studio-tinymce][id$=type][value=visual]' ).each(function() {
			// If textarea is visible and animation/ajax has completed then trigger a click to Visual button and enable the editor
			if ( $.active == 0 && tinyMCE.get( id ) == null && $( '#' + id ).is( ':visible' ) ) {
				$( 'a[id^=widget-black-studio-tinymce][id$=tmce]', $( this ).closest( 'div.widget-inside' ) ).click();
			}
			// Otherwise wait and retry later (animation ongoing)
			else if ( $( 'div.widget:has(#' + id + ') div.widget-inside' ).is( ':visible' ) && tinyMCE.get( id ) == null ) {
				setTimeout(function() {
					black_studio_ajax_deferred_activate_visual_editor( id );
					id=null;
				}, 100 );
			}
		});
	}
	

	
	// Document ready stuff
	$( document ).ready(function() {
		// Event handler for widget opening button
		$( document ).on( 'click', 'div.widget:has(textarea[id^=widget-black-studio-tinymce]) .widget-title, div.widget:has(textarea[id^=widget-black-studio-tinymce]) a.widget-action', function( event ) {
			//event.preventDefault();
			var $widget = $( this ).closest( 'div.widget' );
			var $text_area = $( 'textarea[id^=widget-black-studio-tinymce]', $widget );
			if ( $( '[name="' + $( '#' + $text_area.attr('id') ).attr('name') + '"]' ).size() > 1) {
				var $widget_inside = $( 'div.widget-inside', $widget );
				if ( $( 'div.error', $widget_inside).length == 0 ) {
					$widget_inside.prepend('<div class="error"><strong>' + black_studio_tinymce_local.error_duplicate_id + '</strong></div>');
				}
			}
			// Event handler for widget saving button (for new instances)
			$( 'input[name=savewidget]', $widget ).on( 'click', function( event ) {
				var $widget = $( this ).closest( 'div.widget' )
				var $text_area = $( 'textarea[id^=widget-black-studio-tinymce]', $widget );
				if ( tinyMCE.get( $text_area.attr( 'id' ) ) != null ) {
					black_studio_deactivate_visual_editor( $text_area.attr( 'id' ) );
				}
				// Event handler for ajax complete
				$( this ).unbind( 'ajaxSuccess' ).ajaxSuccess( function( event, xhr, settings ) {
					var $text_area = $( 'textarea[id^=widget-black-studio-tinymce]', $( this ).closest( 'div.widget-inside') );
					black_studio_ajax_deferred_activate_visual_editor( $text_area.attr( 'id' ) );
				});
			});
			$( '#wpbody-content' ).css( 'overflow', 'visible' ); // needed for small screens
			$widget.css( 'position', 'relative' ).css( 'z-index', '100000' ); // needed for small screens and for fullscreen mode
			black_studio_open_deferred_activate_visual_editor( $text_area.attr( 'id' ) );
			$( '.insert-media', $widget ).data( 'editor', $text_area.attr( 'id' ) );
		});
		// Event handler for widget saving button (for existing instances)
		$( 'div.widget[id*=black-studio-tinymce] input[name=savewidget]').on( 'click', function( event ) {
			var $widget = $( this ).closest( 'div.widget' )
			var $text_area = $( 'textarea[id^=widget-black-studio-tinymce]', $widget );
			if ( tinyMCE.get( $text_area.attr( 'id' ) ) != null ) {
				black_studio_deactivate_visual_editor( $text_area.attr( 'id' ) );
			}
			// Event handler for ajax complete
			$( this ).unbind( 'ajaxSuccess' ).ajaxSuccess( function( event, xhr, settings ) {
				var $text_area = $( 'textarea[id^=widget-black-studio-tinymce]', $( this ).closest( 'div.widget-inside' ) );
				black_studio_ajax_deferred_activate_visual_editor( $text_area.attr( 'id' ) );
			});
		});
		// Event handler for visual switch button
		$( document ).on( 'click', 'a[id^=widget-black-studio-tinymce][id$=tmce]', function( event ) {
			//event.preventDefault();
			var $widget_inside = $( this ).closest( 'div.widget-inside,div.panel-dialog' );
			var $wrap_id = $( 'div[id^=wp-widget-black-studio-tinymce][id$=-wrap]', $widget_inside );
			var $textarea_id = $( 'textarea[id^=widget-black-studio-tinymce]', $widget_inside ).attr( 'id' )
			tinymce.DOM.removeClass( $wrap_id, 'html-active' );
			tinymce.DOM.addClass( $wrap_id, 'tmce-active' );
			$( 'input[id^=widget-black-studio-tinymce][id$=type]', $widget_inside ).val( 'visual' );
			black_studio_activate_visual_editor( $textarea_id );
		});
		// Event handler for html switch button
		$( document ).on( 'click', 'a[id^=widget-black-studio-tinymce][id$=html]', function( event ) {
			//event.preventDefault();
			var $widget_inside = $( this ).closest( 'div.widget-inside,div.panel-dialog' );
			var $wrap_id = $( 'div[id^=wp-widget-black-studio-tinymce][id$=-wrap]', $widget_inside );
			var $textarea_id = $( 'textarea[id^=widget-black-studio-tinymce]', $widget_inside ).attr( 'id' )
			$( 'input[id^=widget-black-studio-tinymce][id$=type]', $widget_inside ).val( 'visual' );
			tinymce.DOM.removeClass( $wrap_id, 'tmce-active' );
			tinymce.DOM.addClass( $wrap_id, 'html-active' );
			$( 'input[id^=widget-black-studio-tinymce][id$=type]', $widget_inside ).val( 'html' );
			black_studio_deactivate_visual_editor( $textarea_id );
		});
		// Set wpActiveEditor variables used when adding media from media library dialog
		$( document ).on( 'click', '.wp-media-buttons a', function() {
			var $widget_inside = $( this ).closest( 'div.widget-inside' );
			wpActiveEditor = $( 'textarea[id^=widget-black-studio-tinymce]', $widget_inside ).attr( 'id' );	
		});
		// Activate editor when in accessibility mode
		if ( $( 'body.widgets_access' ).size() > 0) {
			var $text_area = $( 'textarea[id^=widget-black-studio-tinymce]' );
			black_studio_open_deferred_activate_visual_editor( $text_area.attr( 'id' ) );
		}
	});
})( jQuery ); // end self-invoked wrapper function