<?php

/**
 * Plugin Name: Olevmedia Shortcodes
 * Plugin URI: http://olevmedia.com/
 * Description: Olevmedia Shortcodes plugin adds a button to editor, which provides you plenty of handy shortcodes (buttons, icons, lists, infoboxes and more)
 * Version: 1.1.1
 * Author: Olevmedia
 * Author URI: http://olevmedia.com/
 */

$GLOBALS['omShortcodesPlugin'] = array(
	'version' => '1.1.1',
	'path' => plugin_dir_path( __FILE__ ),
	'path_url' => plugin_dir_url( __FILE__ ),
	'config' => array(
		'theme_support' => array(
			'theme_color' => false,
			'animation' => false,
			'full_width' => false,
		),
		'theme_color_supported' => false,
		'theme_rel_supported' => false,
		'load_font_awesome_files' => true,
		'include_minified' => false,
		'responsive_mode' => true,
		'responsive_bounds' => array(
			'tablet' => array('from' => 768, 'to' => 959),
			'mobile' => array('from' => false, 'to' => 767),
		),
		'scripts_in_footer' => true,
	),
);


function omsc_get_config_from_theme() {
	$GLOBALS['omShortcodesPlugin']['config'] = apply_filters('omsc_config', $GLOBALS['omShortcodesPlugin']['config']);
}
add_action('init', 'omsc_get_config_from_theme');


load_plugin_textdomain( 'om_shortcodes', false, $GLOBALS['omShortcodesPlugin']['path'] . 'languages/' );


include_once( 'libraries/simple_html_dom.php' );
include_once( 'functions/js-strings-translation.php' );
include_once( 'functions/fontawesome.php' );
include_once( 'functions/button.php' );
include_once( 'functions/interface.php' );
include_once( 'functions/workup.php' );