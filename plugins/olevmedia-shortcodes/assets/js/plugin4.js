(function() {
    tinymce.PluginManager.add( 'omsc_shortcodes_plugin', function( editor, url ) {

				var menu=[];
				
				function addPopup ( item, title, id ) {
					item.onclick = function () {
						omsc_plugin_popup(id, title);
					};
				}
				
				function addInsert ( item, title, code_start, code_end) {
					item.onclick = function () {
						omsc_plugin_insert(title, code_start, code_end);
					};
				}
				
				function addItems(arr, node) {
					
					for(k in arr) {
						var i={text: arr[k]['title']};
						if(arr[k]['type'] == 'parent') {
							var m=[];
							addItems(arr[k]['childs'], m);
							i.menu=m;
						} else if(arr[k]['type'] == 'addPopup') {
							addPopup(i, arr[k]['title'], k);
						} else if(arr[k]['type'] == 'addInsert') {
							addInsert(i, arr[k]['title'], arr[k]['before'], arr[k]['after']);
						}
						node.push(i);
					}
					
				}
				
				addItems(OMSC_PLUGIN_BUTTON_MENU, menu);

        editor.addButton( 'omsc_shortcodes_button', {

            title: 'Insert Shortcode',
            /*text: 'Shortcodes',*/
            icon: 'icon-om-shortcodes',
            type: 'menubutton',
            menu: menu

        } );

    } );
})();