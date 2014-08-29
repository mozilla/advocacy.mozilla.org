(function() {
	tinymce.create('tinymce.plugins.omsc_shortcodes_plugin', {
		init : function(ed, url) {
		
		},
		createControl : function(id, cm) {
			if ( id == 'omsc_shortcodes_button' )	{	
				var this_ = this;
				btn = cm.createMenuButton("omsc_shortcodes_button", {
					title: 'Insert Shortcode',
					image: OMSC_PLUGIN_PATH_URL+'assets/img/button-shortcodes.png'
				});
				
				btn.onRenderMenu.add(function (c, b) {
					
					function add_items(arr, node) {
						
						for(k in arr) {
							if(arr[k]['type'] == 'parent') {
								var newnode=node.addMenu( {title: arr[k]['title']} );
								add_items(arr[k]['childs'], newnode);
							} else if(arr[k]['type'] == 'addPopup') {
								this_.addPopup( node, arr[k]['title'], k );
							} else if(arr[k]['type'] == 'addInsert') {
								this_.addInsert( node, arr[k]['title'], arr[k]['before'], arr[k]['after'] );
							}
						}
						
					}
					
					add_items(OMSC_PLUGIN_BUTTON_MENU, b);
					
				});
				
				return btn;
			}
			
			return null;
		},
		addPopup: function ( b, title, id ) {
			b.add({
				title: title,
				onclick: function () {
					omsc_plugin_popup(id, title);
				}
			});
		},
		addInsert: function ( b, title, code_start, code_end) {
			b.add({
				title: title,
				onclick: function () {
					omsc_plugin_insert(title, code_start, code_end);
				}
			})
		}
	});
	
	tinymce.PluginManager.add('omsc_shortcodes_plugin', tinymce.plugins.omsc_shortcodes_plugin);
})();