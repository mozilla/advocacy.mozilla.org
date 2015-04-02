/* Black Studio TinyMCE Widget - JS */

/* global bstw_data, tinymce, tinyMCEPreInit, QTags, quicktags, isRtl */

var bstw;

(function( $ ) {

	// Return bstw instance given the textarea ID or any jQuery object inside the widget object
	bstw = function( arg ) {

		var id = null;

		// ID initialization
		if ( typeof arg === 'string' ) {
			id = arg;
		}
		// jQuery object initialization
		else if ( typeof arg === 'object' && arg instanceof jQuery ) {
			id = $( 'textarea[id^=widget-black-studio-tinymce][id$=text]', arg.closest( bstw_data.container_selectors ) ).attr( 'id' );
		}

		// Create and return instance
		return {

			// Activate editor
			activate: function ( force_init ) {
				force_init = typeof force_init !== 'undefined' ? force_init : true;
				if ( ! $( '#' + id ).hasClass( 'active' ) && ! $( '#' + id ).hasClass( 'activating' )) {
					$( '#' + id ).addClass( 'activating' );
					if ( ! this.is_quicktags_configured() ) {
						tinyMCEPreInit.qtInit[ id ] = tinyMCEPreInit.qtInit['black-studio-tinymce-widget'];
						tinyMCEPreInit.qtInit[ id ].id = id;
					}
					if ( ! this.is_quicktags_active() ) {
						var prevInstances, newInstance;
						prevInstances = QTags.instances;
						QTags.instances = [];
						quicktags( tinyMCEPreInit.qtInit[ id ] );
						QTags._buttonsInit();
						newInstance = QTags.instances[ id ];
						QTags.instances = prevInstances;
						QTags.instances[ id ] = newInstance;
					}
					if ( ! this.is_tinymce_configured() ) {
						tinyMCEPreInit.mceInit[ id ] = tinyMCEPreInit.mceInit['black-studio-tinymce-widget'];
						tinyMCEPreInit.mceInit[ id ].selector = '#' + id;
					}
					if ( ! this.is_tinymce_active() && this.get_mode() === 'visual' ) {
						tinyMCEPreInit.mceInit[ id ].setup = function( ed ) {
							// Real time preview (Theme customizer)
							ed.on( 'keyup change', function() {
								if ( bstw( id ).get_mode() === 'visual' ) {
									bstw( id ).update_content();
								}
								$( '#' + id ).change();
							});
							$( '#' + id ).addClass( 'active' ).removeClass( 'activating' );
						};
						if ( ! force_init ) {
							this.go();
						}
						else {
							tinymce.init( tinyMCEPreInit.mceInit[ id ] );
						}
					} else {
						$( '#' + id ).addClass( 'active' ).removeClass( 'activating' );
					}
				}
				return this;
			},

			// Deactivate editor
			deactivate: function() {
				if ( ! $( '#' + id ).hasClass( 'activating' ) ) {
					if ( this.is_tinymce_active() ) {
						tinymce.get( id ).remove();
					}
					if ( this.is_tinymce_configured() ) {
						delete tinyMCEPreInit.mceInit[ id ];
					}
					if ( this.is_quicktags_active() ) {
						$( '.quicktags-toolbar', this.get_widget_inside() ).remove();
						delete QTags.instances[ id ];
					}
					if ( this.is_quicktags_configured() ) {
						delete tinyMCEPreInit.qtInit[ id ];
					}
					$( '#' + id ).removeClass( 'active' );
				}
				return this;
			},

			// Update textarea content when in visual mode
			update_content: function() {
				var content;
				if ( this.get_mode() === 'visual' ) {
					content = tinymce.get( id ).save();
					if ( tinyMCEPreInit.mceInit[ id ].wpautop ) {
						content = window.switchEditors.pre_wpautop( content );
					}
					this.get_textarea().val( content);
				} else if ( this.is_tinymce_active() ) {
					content = this.get_textarea().val();
					if ( tinyMCEPreInit.mceInit[ id ].wpautop ) {
						content = window.switchEditors.wpautop( content );
					}
					tinymce.get( id ).setContent( content );
				}
				return this;
			},

			// Setup an editor mode
			go: function( mode ) {
				if ( 'undefined' === typeof mode) {
					mode = this.get_mode();
				}
				window.switchEditors.go( id, 'visual' === mode ? 'tmce' : 'html' );
				return this;
			},

			// Get the current editor mode ( visual / html ) from the input value
			get_mode: function() {
				return  $( 'input[id^=widget-black-studio-tinymce][id$=type]', this.get_container() ).val();
			},

			// Set editor mode ( visual / html ) into the input value
			set_mode: function( mode ) {
				$( 'input[id^=widget-black-studio-tinymce][id$=type]', this.get_container() ).val( mode );
				return this;
			},

			// Get the jQuery container object containing the instance
			get_container: function() {
				return $( '#' + id ).closest( bstw_data.container_selectors );
			},

			// Get the div.widget jQuery object containing the instance
			get_widget: function() {
				return $( '#' + id ).closest( 'div.widget' );
			},

			// Get the div.widget-inside jQuery object containing the instance
			get_widget_inside: function() {
				return $( '#' + id ).closest( 'div.widget-inside' );
			},

			// Get the textarea jQuery object related to the instance
			get_textarea: function() {
				return $( '#' + id );
			},

			// Check if the tinymce instance is active
			is_tinymce_active: function() {
				return 'object' === typeof tinymce && 'object' === typeof tinymce.get( id ) && null !== tinymce.get( id );
			},

			// Check if the tinymce instance is configured
			is_tinymce_configured: function() {
				return 'undefined' !== typeof tinyMCEPreInit.mceInit[ id ];
			},

			// Check if the quicktags instance is active
			is_quicktags_active: function() {
				return 'object' === typeof QTags.instances[ id ];
			},

			// Check if the quicktags instance is configured
			is_quicktags_configured: function() {
				return 'object' === typeof tinyMCEPreInit.qtInit[ id ];
			},

			// Checks and settings to run before opening the widget
			prepare: function() {
				// Check for widgets with duplicate ids
				if ( $( '[name="' + this.get_textarea().attr( 'name' ) + '"]' ).size() > 1) {
					if ( $( 'div.error', this.get_widget_inside() ).length === 0 ) {
						this.get_widget_inside().prepend( '<div class="error"><strong>' + bstw_data.error_duplicate_id + '</strong></div>' );
					}
				}
				// Fix CSS
				this.get_widget().css( 'position', 'relative' ).css( 'z-index', '100000' ); // needed for small screens and for fullscreen mode
				$( '#wpbody-content' ).css( 'overflow', 'visible' ); // needed for small screens
				return this;
			},

			// Responsive: adjust widget width if it can't fit into the screen
			responsive: function() {
				if ( this.get_widget_inside().is( ':visible' ) ) {
					var target_width = parseInt( $( 'input[name=widget-width]', this.get_widget() ).val(), 10 ),
						window_width = $( window ).width(),
						widget_width = this.get_widget().parent().width(),
						menu_width = parseInt( $( '#wpcontent' ).css( 'margin-left' ), 10 ),
						isRTL = !! ( 'undefined' !== typeof isRtl && isRtl ),
						margin;
					if ( target_width + menu_width + 30 > window_width ) {
						if ( this.get_widget().closest( 'div.widget-liquid-right' ).length ) {
							margin = isRTL ? 'margin-right' : 'margin-left';
						} else {
							margin = isRTL ? 'margin-left' : 'margin-right';
						}
						this.get_widget().css( margin, ( widget_width - ( window_width - 30 - menu_width) ) + 'px' );
					}
				}
				return this;
			}

		};
	};

	// Document ready stuff
	$( document ).ready(function() {

		// Event handler for widget open button
		$( document ).on( 'click', 'div.widget[id*=black-studio-tinymce] .widget-title, div.widget[id*=black-studio-tinymce] .widget-action', function() {
			if ( ! $( this ).parents( '#available-widgets' ).length ) {
				bstw( $( this ) ).prepare().responsive().activate( false );
				// Note: the save event handler is intentionally attached to the save button instead of document
				// to let the the textarea content be updated before the ajax request starts
				$( 'input[name=savewidget]',  bstw( $( this ) ).get_widget() ).on( 'click', function() {
					var height = $( this ).closest( '.widget' ).find( '.wp-editor-wrap' ).height();
					$( this ).closest( '.widget' ).find( '.wp-editor-wrap' ).height( height ).append( '<div class="bstw-loading"></div>' );
					$( this ).closest( '.widget' ).find( '.bstw-loading' ).height( height ).show();
					bstw( $( this ) ).update_content();
				});
			}
		});

		// Event handler for widget added
		$( document ).on( 'widget-added', function( event, $widget ) {
			if ( $widget.is( '[id*=black-studio-tinymce]' ) ) {
				event.preventDefault();
				bstw( $widget ).activate();
			}
		});
		
		// Event handler for widget updated
		$( document ).on( 'widget-updated', function( event, $widget ) {
			if ( $widget.is( '[id*=black-studio-tinymce]' ) ) {
				event.preventDefault();
				bstw( $widget ).deactivate().activate();
			}
		});

		// Event handler for widget synced
		$( document ).on( 'widget-synced', function( event, $widget ) {
			if ( $widget.is( '[id*=black-studio-tinymce]' ) ) {
				event.preventDefault();
				if ( bstw( $widget ).get_mode() === 'visual' ) {
					bstw( $widget ).update_content();
				}
			}
		});

		// Event handler for visual switch button
		$( document ).on( 'click', '[id^=widget-black-studio-tinymce][id$=tmce]', function() {
			bstw( $( this ) ).set_mode( 'visual' );
		});

		// Event handler for html switch button
		$( document ).on( 'click', '[id^=widget-black-studio-tinymce][id$=html]', function() {
			bstw( $( this ) ).set_mode( 'html' );
		});

		// Set active editor when clicking on media buttons
		$( document ).on ( 'click.wp-editor', '.wp-editor-wrap', function() {
			if ( this.id ) {
				window.wpActiveEditor = this.id.slice( 3, -5 );
			}
		});

		// Deactivate editor on drag & drop operations
		$( document ).on( 'sortstart',  function( event, ui ) {
			if ( event !== null && ( ! $( ui.item ).is( '.widget' ) || $( ui.item ).is( '.ui-draggable' ) ) ) {
				return;
			}
			var open_widgets_selectors = [
				'body.wp-customizer .expanded > div[id*=black-studio-tinymce].widget', // Theme Customizer
				'.widget-liquid-right div[id*=black-studio-tinymce].widget.open' // Widgets page
			];
			$( open_widgets_selectors.join( ', ' ) ).filter( ':has(.widget-inside:visible)' ).each(function() {
				$( '.widget-title', this ).trigger( 'click' );
				bstw( $( this ) ).deactivate();
			});
			if ( ui.item.is( '[id*=black-studio-tinymce]' ) ){
				bstw( ui.item.find( 'textarea[id^=widget-black-studio-tinymce]' ) ).deactivate();
			}
		});
		$( document ).on( 'sortstop',  function( event, ui ) {
			if ( ui.item.is( '[id*=black-studio-tinymce]' ) ){
				bstw( ui.item.find( 'textarea[id^=widget-black-studio-tinymce]' ) ).activate( false );
			}
		});
		$( document ).on( 'sortupdate',  function( event, ui ) {
			if ( event !== null && ( ! $( ui.item ).is( '.widget' ) || $( ui.item ).is( '.ui-draggable' ) ) ) {
				return;
			}
			$( 'body' ).addClass( 'wait' );
			setTimeout(function() {
				$( 'textarea[id^=widget-black-studio-tinymce].active' ).each(function() {
					bstw( $( this ) ).deactivate();
				});
				$( 'body' ).removeClass( 'wait' );
			}, 1000 );
		});

		// External events
		if ( 'object' === typeof bstw_data.activate_events && bstw_data.activate_events.length > 0 ) {
			$( document ).on( bstw_data.activate_events.join( ' ' ), function( event ) {
				bstw( $( event.target ) ).activate();
			});
		}
		if ( 'object' === typeof bstw_data.deactivate_events && bstw_data.deactivate_events.length > 0 ) {
			$( document ).on( bstw_data.deactivate_events.join( ' ' ), function( event ) {
				bstw( $( event.target ) ).deactivate();
			});
		}
		
		// Event handler for window resize (needed for responsive behavior)
		$( window ).resize(function() {
			$( 'textarea[id^=widget-black-studio-tinymce]' ).each(function() {
				bstw( $( this ) ).responsive();
			});
		});

		// Deactivate quicktags toolbar on hidden base instance
		$( '#qt_widget-black-studio-tinymce-__i__-text_toolbar' ).remove();
		
		// Plugin links toggle behavior
		$( document ).on( 'click', '.bstw-links-icon', function( event ) {
			event.preventDefault();
			$( this ).closest( '.bstw-links' ).children( '.bstw-links-list' ).toggle();
		});
		
	});

})( jQuery ); // end self-invoked wrapper function
