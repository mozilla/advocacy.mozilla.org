
function omsc___(id) {
	if(typeof(omsc_translated_strings) != 'undefined' && id in omsc_translated_strings)
		return omsc_translated_strings[id];
	else
		return '';
}

function omsc_plugin_popup(id, title) {
	
	var $modal=jQuery('<div class="media-modal omsc-shortcodes-modal" id="omsc-shortcodes-modal" />');
	var $close=jQuery('<a class="media-modal-close" href="#" title="" />')
		.attr('title',omsc___('close'))
		.html('<span class="media-modal-icon"></span></a>')
		.appendTo($modal);
		
	var $content=jQuery('<div class="media-modal-content" />').appendTo($modal);
	var $backdrop=jQuery('<div class="media-modal-backdrop" />');
	
	var $spinner=jQuery('<div class="spinner omsc-spinner" />').appendTo($content).show();
	
	$modal.appendTo('body');
	$backdrop.appendTo('body');
	
	function omsc_plugin_popup_close() {
		$modal.remove();
		$backdrop.remove();
	}
	
	$close.click(function(){
		omsc_plugin_popup_close();
		return false;
	});

	$modal.data('close-function',omsc_plugin_popup_close);
	
	jQuery.post(
		ajaxurl,
		{
			action: 'omsc_popup',
			id: id,
			title: title
		},
		function(data){
			$content.html(data);
			omsc_init_popup($content);
		},
		'html'
	);
}

function omsc_plugin_insert(title, code_start, code_end) {
	tinyMCE.activeEditor.selection.setContent(code_start + tinyMCE.activeEditor.selection.getContent() + code_end);
}

function omsc_init_popup($container) {
	
	omsc_init_color_pickers($container);
	
	omsc_init_fontawesomepreview($container);
	
	omsc_init_code_generator();
	
}

function omsc_init_color_pickers($container)
{
	$container.find('.wp-color-picker-field').wpColorPicker({
		clear: function(){
			jQuery(this).parents('.wp-picker-container').find('.wp-color-result').addClass('wp-picked-cleared');
		},
		change: function(){
			jQuery(this).parents('.wp-picker-container').find('.wp-color-result').removeClass('wp-picked-cleared');
		}
	}).each(function(){
		if(jQuery(this).wpColorPicker('color') == '')
			jQuery(this).parents('.wp-picker-container').find('.wp-color-result').addClass('wp-picked-cleared');
	});
}

function omsc_init_fontawesomepreview($container) {
	
	$container.find('#omsc-popup-fontawesomepreview-link').click(function(){
		
		if(!jQuery('html').data('fontawesome-added')) {
			jQuery('head').append('<link rel="stylesheet" href="'+OMSC_PLUGIN_PATH_URL+'assets/css/font-awesome.min.css" type="text/css" />');
			jQuery('html').data('fontawesome-added', true);
		}
		
		$container.find('.omsc-popup-fontawesomepreview-content').slideToggle(200);
		
		return false;
	});
	
	$container.find('.omsc-popup-option-line.omsc-fontawesomeicon').each(function(){
		
		var $this=jQuery(this);
		$this.find('select').change(function(){
			$this.find('.omsc-popup-fontawesomepreview-content .omsc-item').removeClass('active').filter('[data-icon='+jQuery(this).val()+']').addClass('active');
		}).change();
		
	});
	
	$container.find('.omsc-popup-fontawesomepreview-content .omsc-item').click(function(){
		
		$container.find('.omsc-popup-fontawesomepreview-content .omsc-item').removeClass('active');
		jQuery(this).addClass('active');
		jQuery('#'+jQuery(this).data('option-id')).val(jQuery(this).data('icon'));
		
	});
	
}

function omsc_init_code_generator($container) {

	jQuery('.omsc-popup-submit-button').click(function(){
		
		var id=jQuery(this).data('shortcode-id');
		if(typeof(window['omsc_shortcode_generator_'+id]) == 'function') {
			var code=window['omsc_shortcode_generator_'+id]();
			if(typeof(code) != 'undefined' && typeof(code['before']) != 'undefined' && typeof(code['after']) != 'undefined')
				window.tinyMCE.activeEditor.selection.setContent(code.before + window.tinyMCE.activeEditor.selection.getContent() + code.after);
		} else {
			alert('Sorry, an error has occurred.');
		}
		
		jQuery('#omsc-shortcodes-modal').data('close-function')();
		
		return false;
	});
	
}

function omsc_shortcodes_attr_esc(str) {
	
	str=str.replace(/"/g,'\\"');
	
	return str;
}

function omsc_browse_button_init($obj) {
	
	jQuery($obj).find('.omsc-browse-button').click(function(event) {
		event.preventDefault();

		var $button=jQuery(this);		 
		var input_id=jQuery(this).attr('rel');
		var custom_file_frame;

	  // If the media frame already exists, reopen it.
	  if ( jQuery(this).data('custom_file_frame') ) {
	  	custom_file_frame=jQuery(this).data('custom_file_frame');
	    custom_file_frame.open();
	    return;
	  }
	  
	  jQuery(this).data('custom_file_frame', null);
	  
	  var args={
        // Set the title of the modal.
        title: jQuery(this).data("choose"),

        // Customize the submit button.
        button: {
            // Set the text of the button.
            text: jQuery(this).data("select")
        },
        multiple: false
    };
    if(jQuery(this).data('library')) {
    	args.library={
    		type: jQuery(this).data('library')
    	};
    }
		custom_file_frame = wp.media.frames.customHeader = wp.media(args);
		jQuery(this).data('custom_file_frame', custom_file_frame);

    custom_file_frame.on( "select", function() {
			var attachment = custom_file_frame.state().get("selection").first();
			jQuery('#'+input_id).val(attachment.attributes.url);
			
			if($button.data('mode') == 'preview') {
				jQuery('#'+$button.data('base-id')+'_image').html('<a href="'+attachment.attributes.url+'" target="_blank"><img src="'+attachment.attributes.url+'" /></a>');
			}
		});
		
		custom_file_frame.open();
		
		return;
	});
	
}