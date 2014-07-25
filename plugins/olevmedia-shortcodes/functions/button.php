<?php


function omsc_admin_head() {
	global $pagenow;
	
	if( 'post.php' != $pagenow && 'post-new.php' != $pagenow && 'widgets.php' != $pagenow )
		return;
	
	echo "<script type='text/javascript'>";
	
	echo 'var OMSC_PLUGIN_PATH_URL="'. $GLOBALS['omShortcodesPlugin']['path_url'] .'";';
	
	$button_menu=array(
	
		'att' => array(
			'title' => __('Accordion / Toggle / Tabs','om_shortcodes'),
			'type' => 'parent',
			'childs' => array (
				'accordion' => array(
					'title' => __('Accordion','om_shortcodes'),
					'type' => 'addPopup',
				),
				'toggle' => array(
					'title' => __('Toggle Content','om_shortcodes'),
					'type' => 'addPopup',
				),
				'tabs' => array(
					'title' => __('Tabbed Content','om_shortcodes'),
					'type' => 'addPopup',
				),
			),
		),
/*
		'aligned' => array(
			'title' => __('Aligned Content','om_shortcodes'),
			'type' => 'addPopup',
		),
*/
		'animation' => array(
			'title' => __('Animation','om_shortcodes'),
			'type' => 'addPopup',
		),
		'blockquote' => array(
			'title' => __('Blockquote','om_shortcodes'),
			'type' => 'addPopup',
		),
		'box' => array(
			'title' => __('Box','om_shortcodes'),
			'type' => 'addPopup',
		),
	
		'buttons' => array(
			'title' => __('Buttons','om_shortcodes'),
			'type' => 'addPopup',
		),
/*
		'contactform' => array(
			'title' => __('Contact Form','om_shortcodes'),
			'type' => 'addPopup',
		),
*/		

		'columns' => array(
			'title' => __('Columns','om_shortcodes'),
			'type' => 'addPopup',
		),

		'counter' => array(
			'title' => __('Counter','om_shortcodes'),
			'type' => 'addPopup',
		),
		
/*
		'gallery' => array(
			'title' => __('Custom Gallery','om_shortcodes'),
			'type' => 'addPopup',
		),
*/		
	
		'divider' => array(
			'title' => __('Divider','om_shortcodes'),
			'type' => 'addPopup',
		),

		'dropcaps' => array(
			'title' => __('Dropcaps','om_shortcodes'),
			'type' => 'addPopup',
		),

		'full_width' => array(
			'title' => __('Full Width Section','om_shortcodes'),
			'type' => 'addPopup',
		),
		'icons' => array(
			'title' => __('Icons','om_shortcodes'),
			'type' => 'addPopup',
		),
		
		'infoboxes' => array(
			'title' => __('Infobox','om_shortcodes'),
			'type' => 'parent',
			'childs' => array (
				'infobox' => array(
					'title' => __('Infobox','om_shortcodes'),
					'type' => 'addPopup',
				),
				'biginfobox' => array(
					'title' => __('Big Infobox with Button','om_shortcodes'),
					'type' => 'addPopup',
				),
			),
		),
		
		'lists' => array(
			'title' => __('Lists','om_shortcodes'),
			'type' => 'parent',
			'childs' => array (
				'bullets' => array(
					'title' => __('Custom List Bullets','om_shortcodes'),
					'type' => 'addPopup',
				),
				'bullets_individual' => array(
					'title' => __('Custom Bullets per List Item','om_shortcodes'),
					'type' => 'addPopup',
				),
			),
		),	

		'logos' => array(
			'title' => __('Logos','om_shortcodes'),
			'type' => 'addInsert',
			'before' => '[logos]INSERT IMAGES HERE',
			'after' => '[/logos]',
		),
		'map' => array(
			'title' => __('Map','om_shortcodes'),
			'type' => 'addPopup',
		),
				
		'marker' => array(
			'title' => __('Marker','om_shortcodes'),
			'type' => 'addPopup',
		),

		'portfolio' => array(
			'title' => __('Portfolio','om_shortcodes'),
			'type' => 'addPopup',
		),		
		
		'recent_posts' => array(
			'title' => __('Recent Posts','om_shortcodes'),
			'type' => 'addPopup',
		),
		
		'table_group' => array(
			'title' => __('Table','om_shortcodes'),
			'type' => 'parent',
			'childs' => array (
				'pricing' => array(
					'title' => __('Pricing Table','om_shortcodes'),
					'type' => 'addPopup',
				),
				'table' => array(
					'title' => __('Table','om_shortcodes'),
					'type' => 'addPopup',
				),
				'custom_table' => array(
					'title' => __('Custom table styling','om_shortcodes'),
					'type' => 'addInsert',
					'before' => '[custom_table]YOUR CUSTOM TABLE HTML CODE GOES HERE',
					'after' => '[/custom_table]',
				),
			),
		),	

/*		
		'testimonials' => array(
			'title' => __('Testimonials','om_shortcodes'),
			'type' => 'addPopup',
		),
*/
		
		
		'utilities' => array(
			'title' => __('Utilities','om_shortcodes'),
			'type' => 'parent',
			'childs' => array (
				'clear' => array(
					'title' => __('Float clearing','om_shortcodes'),
					'type' => 'addInsert',
					'before' => '[clear]',
					'after' => '',
				),
				'space' => array(
					'title' => __('Vertical Space','om_shortcodes'),
					'type' => 'addPopup',
				),
				'visibility' => array(
					'title' => __('Visibility','om_shortcodes'),
					'type' => 'addPopup',
				),
			),
		),	
		
		'video' => array(
			'title' => __('Video Responsive Box','om_shortcodes'),
			'type' => 'addPopup',
		),

	);
	
	$button_menu = apply_filters('omsc_shortcodes_button_menu', $button_menu);

	$config=$GLOBALS['omShortcodesPlugin']['config'];
	
	if(!$config['theme_support']['full_width']) {
		unset($button_menu['full_width']);
	}
	if(!$config['theme_support']['animation']) {
		unset($button_menu['animation']);
	}
	if(!isset($GLOBALS['omPortfolioPlugin'])) {
		unset($button_menu['portfolio']);
	}
		
	echo 'var OMSC_PLUGIN_BUTTON_MENU='.json_encode($button_menu).';';
	
	echo '</script>';
}
add_action('admin_head', 'omsc_admin_head');

function omsc_add_shortcodes_button() {
	if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
		return;

	if ( get_user_option('rich_editing') == 'true' ) {
		add_filter( 'mce_external_plugins', 'omsc_tmce_plugins'  );
		add_filter( 'mce_buttons', 'omsc_tmce_buttons' );
	}
}
add_action('admin_init', 'omsc_add_shortcodes_button' );

function omsc_tmce_plugins( $plugin_array ) {
	if(version_compare(get_bloginfo('version') , '3.9', '>='))
		$plugin_array['omsc_shortcodes_plugin'] = $GLOBALS['omShortcodesPlugin']['path_url'] . 'assets/js/plugin4.js';
	else
		$plugin_array['omsc_shortcodes_plugin'] = $GLOBALS['omShortcodesPlugin']['path_url'] . 'assets/js/plugin.js';
	return $plugin_array;
}

function omsc_tmce_buttons( $buttons ) {
	array_push( $buttons, "|", 'omsc_shortcodes_button' );
	return $buttons;
}
