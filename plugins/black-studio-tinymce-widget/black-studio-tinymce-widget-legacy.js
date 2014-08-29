// TinyMCE initialization parameters
var tinyMCEPreInit;
// Current editor (backward compatibility)
var edCanvas;
// Current editor
var wpActiveEditor;

(function($) {
	// Activate visual editor
	function black_studio_activate_visual_editor(id) {
		$('#'+id).addClass("mceEditor");
		if ( typeof( tinyMCE ) == "object" && typeof( tinyMCE.execCommand ) == "function" ) {
			black_studio_deactivate_visual_editor(id);
			if (typeof (tinyMCEPreInit.mceInit['black-studio-tinymce-widget']) == "object") { // WP 3.3+
				tinyMCEPreInit.mceInit[id] = tinyMCEPreInit.mceInit['black-studio-tinymce-widget'];
				tinyMCEPreInit.mceInit[id]["elements"] = id;
				try {
					// Instantiate new TinyMCE editor
					tinymce.init(tinymce.extend( {}, tinyMCEPreInit.mceInit['black-studio-tinymce-widget'], tinyMCEPreInit.mceInit[id] ));
				} catch(e){
					alert(e);
				}
			}
			else { // WP 3.2
				tinyMCE.execCommand("mceAddControl", false, id);
			}
		}
	}
	// Deactivate visual editor
	function black_studio_deactivate_visual_editor(id) {
		if ( typeof( tinyMCE ) == "object" && typeof( tinyMCE.execCommand ) == "function" ) {
			if (typeof(tinyMCE.get(id)) == "object") {
				var content = tinyMCE.get(id).getContent();
				tinyMCE.execCommand("mceRemoveControl", false, id);
				$('textarea#'+id).val(content);
			}
		}
	}
	// Activate editor deferred (used upon opening the widget)
	function black_studio_open_deferred_activate_visual_editor(id) {
		$('div.widget-inside:has(#' + id + ') input[id^=widget-black-studio-tinymce][id$=type][value=visual]').each(function() {
			// If textarea is visible and animation/ajax has completed (or in accessibility mode) then trigger a click to Visual button and enable the editor
			if ($('div.widget:has(#' + id + ') :animated').size() == 0 && typeof(tinyMCE.get(id)) != "object" && $('#' + id).is(':visible')) {
				$('a[id^=widget-black-studio-tinymce][id$=visual]', $(this).closest('div.widget-inside')).click();
			}
			// Otherwise wait and retry later (animation ongoing)
			else if (typeof(tinyMCE.get(id)) != "object") {
				setTimeout(function(){black_studio_open_deferred_activate_visual_editor(id);id=null;}, 100);
			}
			// If editor instance is already existing (i.e. dragged from another sidebar) just activate it
			else {
				$('a[id^=widget-black-studio-tinymce][id$=visual]', $(this).closest('div.widget-inside')).click();
			}
		});
	}
	
	// Activate editor deferred (used upon ajax requests)
	function black_studio_ajax_deferred_activate_visual_editor(id) {
		$('div.widget-inside:has(#' + id + ') input[id^=widget-black-studio-tinymce][id$=type][value=visual]').each(function() {
			// If textarea is visible and animation/ajax has completed then trigger a click to Visual button and enable the editor
			if ($.active == 0 && typeof(tinyMCE.get(id)) != "object" && $('#' + id).is(':visible')) {
				$('a[id^=widget-black-studio-tinymce][id$=visual]', $(this).closest('div.widget-inside')).click();
			}
			// Otherwise wait and retry later (animation ongoing)
			else if ($('div.widget:has(#' + id + ') div.widget-inside').is(':visible') && typeof(tinyMCE.get(id)) != "object") {
				setTimeout(function(){black_studio_ajax_deferred_activate_visual_editor(id);id=null;}, 100);
			}
		});
	}
	
	
	// Document ready stuff
	$(document).ready(function(){
		// Event handler for widget opening button
		$('div.widget:has(textarea[id^=widget-black-studio-tinymce]) a.widget-action').live('click', function(event){
			event.preventDefault();
			var $widget = $(this).closest('div.widget');
			var $text_area = $('textarea[id^=widget-black-studio-tinymce]', $widget);
			$('#wpbody-content').css('overflow', 'visible'); // needed for small screens
			$widget.css('position', 'relative').css('z-index', '100'); // needed for small screens
			black_studio_open_deferred_activate_visual_editor($text_area.attr('id'));
		});
		// Force BS handler of opening button to be executed before the one coming with Wordpress
		$(document).data("events").click.unshift($(document).data("events").click.pop());
		// Event handler for widget saving button
		$('div.widget[id*=black-studio-tinymce] input[name=savewidget]').live('click', function(event){
			event.preventDefault();
			var $widget = $(this).closest('div.widget')
			var $text_area = $('textarea[id^=widget-black-studio-tinymce]', $widget);
			if (typeof(tinyMCE.get($text_area.attr('id'))) == "object") {
				black_studio_deactivate_visual_editor($text_area.attr('id'));
			}
			// Event handler for ajax complete
			$(this).unbind('ajaxSuccess').ajaxSuccess(function(event, xhr, settings) {
				var $text_area = $('textarea[id^=widget-black-studio-tinymce]', $(this).closest('div.widget-inside'));
				black_studio_ajax_deferred_activate_visual_editor($text_area.attr('id'));
			});
		});
		// Force BS handler of save button to be executed before the one coming with Wordpress
		$(document).data("events").click.unshift($(document).data("events").click.pop());
		// Event handler for visual switch button
		$('a[id^=widget-black-studio-tinymce][id$=visual]').live('click', function(event){
			event.preventDefault();
			var $widget_inside = $(this).closest('div.widget-inside')
			$('input[id^=widget-black-studio-tinymce][id$=type]', $widget_inside).val('visual');
			$(this).addClass('active');
			$('a[id^=widget-black-studio-tinymce][id$=html]', $widget_inside).removeClass('active');
			black_studio_activate_visual_editor($('textarea[id^=widget-black-studio-tinymce]', $widget_inside).attr('id'));
		});
		// Event handler for html switch button
		$('a[id^=widget-black-studio-tinymce][id$=html]').live('click', function(event){
			event.preventDefault();
			var $widget_inside = $(this).closest('div.widget-inside')
			$('input[id^=widget-black-studio-tinymce][id$=type]', $widget_inside).val('html');
			$(this).addClass('active');
			$('a[id^=widget-black-studio-tinymce][id$=visual]', $widget_inside).removeClass('active');
			black_studio_deactivate_visual_editor($('textarea[id^=widget-black-studio-tinymce]', $widget_inside).attr('id'));
		});
		// Set edCanvas/wpActiveEditor variables used when adding media from media library dialog
		$('.editor_media_buttons a').live('click', function(){
			var $widget_inside = $(this).closest('div.widget-inside')
			edCanvas = $('textarea[id^=widget-black-studio-tinymce]', $widget_inside).get();
			wpActiveEditor = $('textarea[id^=widget-black-studio-tinymce]', $widget_inside).attr('id');	
		});
		// Activate editor when in accessibility mode
		if($('body.widgets_access').size() > 0) {
			var $text_area = $('textarea[id^=widget-black-studio-tinymce]');
			black_studio_open_deferred_activate_visual_editor($text_area.attr('id'));
		}
	});
})(jQuery); // end self-invoked wrapper function