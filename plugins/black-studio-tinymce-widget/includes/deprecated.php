<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Deprecated functions
 *
 * @package Black_Studio_TinyMCE_Widget
 */

/**
 * Global var with plugin version for backward compatibility
 *
 * @since 0.6.3
 * @deprecated 2.0.0
 */
global $black_studio_tinymce_widget_version; // global is necessary because this file is included in a non-global context
$black_studio_tinymce_widget_version = Black_Studio_TinyMCE_Plugin::$version;

/**
 * Global var used for development
 *
 * @since 0.9.4
 * @deprecated 1.4
 */
global $black_studio_tinymce_widget_dev_mode ; // global is necessary because this file is included in a non-global context
$black_studio_tinymce_widget_dev_mode = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG;

/**
 * @since 1.4.0
 * @deprecated 2.0.0
 */
function black_studio_tinymce_get_version() {
	_deprecated_function( __FUNCTION__, '2.0.0', 'bstw()->get_version()' );
	bstw()->get_version();
}

/**
 * @since 0.7.0
 * @deprecated 2.0.0
 */
function black_studio_tinymce_widgets_init() {
	_deprecated_function( __FUNCTION__, '2.0.0', 'bstw()->widgets_init()' );
	bstw()->widgets_init();
}

/**
 * @since 0.8.0
 * @deprecated 2.0.0
 */
function black_studio_tinymce_admin_init() {
	_deprecated_function( __FUNCTION__, '2.0.0', 'bstw()->admin()->admin_init()' );
	bstw()->admin()->admin_init();
}

/**
 * @since 0.5.0
 * @deprecated 2.0.0
 */
function black_studio_tinymce_load_tiny_mce() {
	_deprecated_function( __FUNCTION__, '2.0.0', 'bstw()->admin()->enqueue_media()' );
	bstw()->admin()->enqueue_media();
}

/**
 * @since 0.5.0
 * @deprecated 2.0.0
 */
function black_studio_tinymce_init_editor( $arg ) {
	_deprecated_function( __FUNCTION__, '2.0.0' );
	return $arg;
}

/**
 * @since 0.5.0
 * @deprecated 2.0.0
 */
function black_studio_tinymce_styles() {
	_deprecated_function( __FUNCTION__, '2.0.0', 'bstw()->admin()->admin_print_styles()' );
	bstw()->admin()->admin_print_styles();
}

/**
 * @since 0.5.0
 * @deprecated 2.0.0
 */
function black_studio_tinymce_scripts() {
	_deprecated_function( __FUNCTION__, '2.0.0', 'bstw()->admin()->admin_print_scripts()' );
	bstw()->admin()->admin_print_scripts();
}

/**
 * @since 0.7.0
 * @deprecated 2.0.0
 */
function black_studio_tinymce_footer_scripts() {
	_deprecated_function( __FUNCTION__, '2.0.0', 'bstw()->admin()->admin_print_footer_scripts()' );
	bstw()->admin()->admin_print_footer_scripts();
}

/**
 * @since 0.6.0
 * @deprecated 0.7.0
 */
function black_studio_tinymce_preload_dialogs() {
	_deprecated_function( __FUNCTION__, '0.7', 'bstw()->admin()->admin_print_footer_scripts()' );
	bstw()->admin()->admin_print_footer_scripts();
}

/**
 * @uses get_option()
 *
 * @since 1.3.0
 * @deprecated 2.0.0
 */
function black_studio_tinymce_apply_smilies_to_widget_text( $text ) {
	_deprecated_function( __FUNCTION__, '2.0.0', 'bstw()->text_filters()->convert_smilies( ... )' );
	if ( get_option( 'use_smilies' ) ) {
		$text = bstw()->text_filters()->convert_smilies( $text );
	}
	return $text;
}

/**
 * @since 1.0.0
 * @deprecated 2.0.0
 */
function black_studio_tinymce_upload_iframe_src( $arg ){
	_deprecated_function( __FUNCTION__, '2.0.0', 'bstw()->compatibility()->wordpress()->wp_pre_35_upload_iframe_src( ... )' );
	bstw()->compatibility()->wordpress()->wp_pre_35_upload_iframe_src( $arg );
}

/**
 * @since 1.2.0
 * @deprecated 2.0.0
 */
function black_studio_tinymce_editor_accessibility_mode( $editor ) {
	_deprecated_function( __FUNCTION__, '2.0.0', 'bstw()->admin()->editor_accessibility_mode( ... )' );
	bstw()->admin()->editor_accessibility_mode( $editor );
}

/**
 * @since 1.4.5
 * @deprecated 2.0.0
 */
function black_studio_tinymce_siteorigin_panels_widget_object( $the_widget ) {
	_deprecated_function( __FUNCTION__, '2.0.0', 'bstw()-compatibility()->plugins()->siteorigin_panels_widget_object( ... )' );
	bstw()->compatibility()->plugins()->siteorigin_panels_widget_object( $the_widget );
}
