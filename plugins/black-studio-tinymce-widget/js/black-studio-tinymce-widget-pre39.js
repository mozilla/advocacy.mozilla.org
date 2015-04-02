/* Black Studio TinyMCE Widget - JS */

/* global bstw_data, tinymce, tinyMCEPreInit, isRtl */

(function( $ ) {

	// Returns bstw instance given the textarea ID or any jQuery object inside the widget object
	function bstw( arg ) {

		var id = null;

		// ID initialization
		if ( typeof arg === 'string' ) {
			id = arg;
		}
		// jQuery object initialization
		else if ( typeof arg === 'object' && arg instanceof jQuery ) {
			id = $( 'textarea[id^=widget-black-studio-tinymce]', arg.closest( bstw_data.container_selectors ) ).attr( 'id' );
		}

		// Create and return instance
		return {

			// Activate visual editor
			activate: function () {
				$( '#' + id ).addClass( 'mceEditor' );
				if ( typeof tinymce === 'object' && typeof tinymce.execCommand === 'function' ) {
					this.deactivate();
					tinyMCEPreInit.mceInit[id] = tinyMCEPreInit.mceInit['black-studio-tinymce-widget'];
					tinyMCEPreInit.mceInit[id].selector = '#' + id;
					try {
						// Instantiate new TinyMCE editor
						tinymce.init( tinymce.extend( {}, tinyMCEPreInit.mceInit['black-studio-tinymce-widget'], tinyMCEPreInit.mceInit[id] ) );
						tinymce.execCommand( 'mceAddControl', false, id );
					} catch( e ) {
						window.alert( e );
					}
					// Real time preview (Theme customizer)
					if ( this.is_tinymce_active() ) {
						if ( typeof tinymce.get( id ).on === 'function' ) {
							tinymce.get( id ).on( 'keyup change', function() {
								var content = tinymce.get( id ).getContent();
								$( '#' + id ).val( content ).change();
							});
						}
					}
				}
				return this;
			},

			// Deactivate visual editor
			deactivate: function() {
				if ( typeof tinymce === 'object' && typeof tinymce.execCommand === 'function' ) {
					if ( this.is_tinymce_active() ) {
						var content = tinymce.get( id ).getContent();
						// tinymce.execCommand('mceRemoveControl', false, id);
						tinymce.get( id ).remove();
						$( '#' + id ).val( content );
					}
				}
				return this;
			},

			// Activate editor deferred (after widget opening)
			activate_after_open: function() {
				// Activate only if type is set to visual
				if ( this.get_mode() === 'visual' ) {
					// If textarea is visible and animation/ajax has completed (or in accessibility mode) then trigger a click to Visual button and enable the editor
					if ( $('div.widget:has(#' + id + ') :animated' ).size() === 0 && ! this.is_tinymce_active() && this.is_textearea_visible() ) {
						this.set_mode( 'visual' );
					}
					// Otherwise wait and retry later (animation ongoing)
					else if ( ! this.is_tinymce_active() ) {
						setTimeout(function() {
							bstw( id ).activate_after_open();
						}, 100 );
					}
					// If editor instance is already existing (i.e. dragged from another sidebar) just activate it
					else {
						this.set_mode( 'visual' );
					}
				}
				return this;
			},

			// Activate editor deferred (after ajax requests)
			activate_after_ajax: function () {
				// Activate only if type is set to visual
				if ( this.get_mode() === 'visual' ) {
					// If textarea is visible and animation/ajax has completed then trigger a click to Visual button and enable the editor
					if ( $.active === 0 && ! this.is_tinymce_active() && this.is_textearea_visible() ) {
						this.set_mode( 'visual' );
					}
					// Otherwise wait and retry later (animation ongoing)
					else if ( this.is_widget_inside_visible() && ! this.is_tinymce_active() ) {
						setTimeout(function() {
							bstw( id ).activate_after_ajax();
						}, 100 );
					}
				}
				return this;
			},

			// Get the div.widget jQuery object containing the instance
			get_widget: function() {
				return $( '#' + id ).closest( 'div.widget' );
			},

			// Get the div.widget-inside jQuery object containing the instance
			get_widget_inside: function() {
				return $( '#' + id ).closest( 'div.widget-inside' );
			},

			// Get the div.wp-editor-wrap jQuery object containing the instance
			get_editor_wrap: function() {
				return $( '#' + id ).closest( 'div.wp-editor-wrap' );
			},

			// Get the textarea jQuery object related to the instance
			get_textarea: function() {
				return $( '#' + id );
			},

			// Get the textarea ID related to the instance
			get_id: function() {
				return id;
			},

			// Get the tinymce instance related to the instance
			get_tinymce: function() {
				return tinymce.get( id );
			},

			// Get the current editor mode ( visual / html )
			get_mode: function() {
				return  $( 'input[id^=widget-black-studio-tinymce][id$=type]', this.get_widget_inside() ).val();

			},

			// Set editor mode ( visual / html )
			set_mode: function( value ) {
				if ( value === 'visual' ) {
					this.get_editor_wrap().removeClass( 'html-active' ).addClass( 'tmce-active' );
					this.activate();
				}
				if ( value === 'html' ) {
					this.get_editor_wrap().removeClass( 'tmce-active' ).addClass( 'html-active' );
					this.deactivate();
				}
				$( 'input[id^=widget-black-studio-tinymce][id$=type]', this.get_widget_inside() ).val( value );
				return this;
			},

			// Check if the connected tinymce instance is active
			is_tinymce_active: function() {
				return typeof tinymce === 'object' && typeof tinymce.get( id ) === 'object' && tinymce.get( id ) !== null;
			},

			// Check if the textarea is visible
			is_textearea_visible: function() {
				return $( '#' + id ).is( ':visible' );
			},

			// Check if the widget inside is visible
			is_widget_inside_visible: function() {
				return $( ' div.widget-inside:has(#' + id + ')' ).is( ':visible' );
			},

			// Check for widgets with duplicate ids
			check_duplicates: function() {
				if ( $( '[name="' + this.get_textarea().attr('name') + '"]' ).size() > 1) {
					if ( $( 'div.error', this.get_widget_inside() ).length === 0 ) {
						this.get_widget_inside().prepend('<div class="error"><strong>' + bstw_data.error_duplicate_id + '</strong></div>');
					}
				}
				return this;
			},

			// Fix CSS
			fix_css: function() {
				this.get_widget().css( 'position', 'relative' ).css( 'z-index', '100000' ); // needed for small screens and for fullscreen mode
				$( '#wpbody-content' ).css( 'overflow', 'visible' ); // needed for small screens
				return this;
			},

			// Set target on media buttons
			set_media_target: function() {
				$( '.insert-media', this.get_widget() ).data( 'editor', id );
				return this;
			}
		};
	}

	// Document ready stuff
	$( document ).ready(function() {

		// Event handler for widget open button
		$( document ).on( 'click', 'div.widget[id*=black-studio-tinymce] .widget-title, div.widget[id*=black-studio-tinymce] a.widget-action', function() {
			bstw( $( this ) ).check_duplicates().fix_css().set_media_target().activate_after_open();
			// Event handler for widget save button (for new instances)
			// Note: this event handler is intentionally attached to the save button instead of document
			// to let the the textarea content be updated before the ajax request is run
			$( 'input[name=savewidget]',  bstw( $( this ) ).get_widget() ).on( 'click', function() {
				if ( bstw( $( this ) ).is_tinymce_active() ) {
					bstw( $( this ) ).deactivate();
				}
				// Event handler for ajax complete
				$( this ).unbind( 'ajaxSuccess' ).ajaxSuccess(function() {
					bstw( $( this ) ).activate_after_ajax();
				});
			});
			// Responsive: adjust widget width if it can't fit into the screen
			if ( ! $( this ).parents( '#available-widgets' ).length ) {
				var target_width = parseInt( $( 'input[name=widget-width]', bstw( $( this ) ).get_widget() ).val(), 10 ),
					window_width = $( window ).width(),
					widget_width = bstw( $( this ) ).get_widget().parent().width(),
					menu_width = parseInt( $( '#wpcontent' ).css( 'margin-left' ), 10 ),
					isRTL = !! ( 'undefined' !== typeof isRtl && isRtl ),
					margin;
				if ( target_width + menu_width + 30 > window_width ) {
					if ( bstw( $( this ) ).get_widget().closest( 'div.widget-liquid-right' ).length ) {
						margin = isRTL ? 'margin-right' : 'margin-left';
					} else {
						margin = isRTL ? 'margin-left' : 'margin-right';
					}
					$( bstw( $( this ) ).get_widget() ).css( margin, ( widget_width - ( window_width - 30 - menu_width) ) + 'px' );
				}
			}
		});

		// Event handler for widget save button (for existing instances)
		$( 'div.widget[id*=black-studio-tinymce] input[name=savewidget]' ).on( 'click', function() {
			if ( bstw( $( this ) ).is_tinymce_active() ) {
				bstw( $( this ) ).deactivate();
			}
			// Event handler for ajax complete
			$( this ).unbind( 'ajaxSuccess' ).ajaxSuccess(function() {
				bstw( $( this ) ).activate_after_ajax();
			});
		});

		// Event handler for visual switch button
		$( document ).on( 'click', 'a[id^=widget-black-studio-tinymce][id$=tmce]', function() {
			bstw( $( this ) ).set_mode( 'visual' );
		});

		// Event handler for html switch button
		$( document ).on( 'click', 'a[id^=widget-black-studio-tinymce][id$=html]', function() {
			bstw( $( this ) ).set_mode( 'html' );
		});

		// Event handler for widget added (i.e. with Theme Customizer */
		$( document ).on( 'widget-added', function( event, $widget ) {
			if ( $widget.is( '[id*=black-studio-tinymce]' ) ) {
				event.preventDefault();
				bstw( $widget ).activate_after_open();
			}
		});

		// Set window.wpActiveEditor variable used when adding media from media library dialog
		$( document ).on( 'click', '.wp-media-buttons a', function() {
			window.wpActiveEditor = bstw( $( this ) ).get_id();
		});

		// Activate editor when in accessibility mode
		if ( $( 'body.widgets_access' ).size() > 0 ) {
			bstw( $( 'textarea[id^=widget-black-studio-tinymce]' ).attr( 'id' ) ).activate_after_open();
		}

		// Plugin links toggle behavior
		$( document ).on( 'click', '.bstw-links-icon', function( event ) {
			event.preventDefault();
			$( this ).closest( '.bstw-links' ).children( '.bstw-links-list' ).toggle();
		});

	});

})( jQuery ); // end self-invoked wrapper function