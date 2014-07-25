<?php
/*
Plugin Name: Black Studio TinyMCE Widget
Plugin URI: http://wordpress.org/extend/plugins/black-studio-tinymce-widget/
Description: Adds a WYSIWYG widget based on the standard TinyMCE WordPress visual editor.
Version: 1.4.4
Author: Black Studio
Author URI: http://www.blackstudio.it
License: GPLv3
Text Domain: black-studio-tinymce-widget
Domain Path: /languages
*/

/* Widget class */
class WP_Widget_Black_Studio_TinyMCE extends WP_Widget {

	function __construct() {
		$widget_ops = array( 'classname' => 'widget_black_studio_tinymce', 'description' => __( 'Arbitrary text or HTML with visual editor', 'black-studio-tinymce-widget' ) );
		$control_ops = array( 'width' => 800, 'height' => 800 );
		parent::__construct( 'black-studio-tinymce', __( 'Visual Editor', 'black-studio-tinymce-widget' ), $widget_ops, $control_ops );
	}

	function widget( $args, $instance ) {
		if ( get_option( 'embed_autourls' ) ) {
			$wp_embed = $GLOBALS['wp_embed'];
			add_filter( 'widget_text', array( $wp_embed, 'run_shortcode' ), 8 );
			add_filter( 'widget_text', array( $wp_embed, 'autoembed' ), 8 );
		}
		extract( $args );
		$before_text = apply_filters( 'black_studio_tinymce_before_text', '<div class="textwidget">', $instance );
		$after_text = apply_filters( 'black_studio_tinymce_after_text', '</div>', $instance );
		$title = apply_filters( 'widget_title', empty($instance['title']) ? '' : $instance['title'], $instance, $this->id_base );
		$text = apply_filters( 'widget_text', $instance['text'], $instance );
		if ( function_exists( 'icl_t' ) ) {
			$title = icl_t( "Widgets", 'widget title - ' . md5 ( $title ), $title );
			$text = icl_t( "Widgets", 'widget body - ' . $this->id_base . '-' . $this->number, $text );
		}
		$text = do_shortcode( $text );
		echo $before_widget;
		if ( ! empty( $title ) ) {
			echo $before_title . $title . $after_title;
		}
		echo $before_text . $text . $after_text;
		echo $after_widget;
	}

	function update( $new_instance, $old_instance ) {
		$instance = $old_instance;
		$instance['title'] = strip_tags( $new_instance['title'] );
		if ( current_user_can('unfiltered_html') ) {
			$instance['text'] =  $new_instance['text'];
		}
		else {
			$instance['text'] = stripslashes( wp_filter_post_kses( addslashes($new_instance['text']) ) ); // wp_filter_post_kses() expects slashed
		}
		$instance['type'] = strip_tags( $new_instance['type'] );
		if ( function_exists( 'icl_register_string' )) {
			//icl_register_string( "Widgets", 'widget title - ' . $this->id_base . '-' . $this->number /* md5 ( apply_filters( 'widget_title', $instance['title'] ))*/, apply_filters( 'widget_title', $instance['title'] ) ); // This is handled automatically by WPML
			icl_register_string( "Widgets", 'widget body - ' . $this->id_base . '-' . $this->number, apply_filters( 'widget_text', $instance['text'] ) );
		}
		return $instance;
	}

	function form( $instance ) {
		$instance = wp_parse_args( (array) $instance, array( 'title' => '', 'text' => '', 'type' => 'visual' ) );
		$title = strip_tags( $instance['title'] );
		if ( function_exists( 'esc_textarea' ) ) {
			$text = esc_textarea( $instance['text'] );
		}
		else {
			$text = stripslashes( wp_filter_post_kses( addslashes( $instance['text'] ) ) );
		}
		$type = esc_attr( $instance['type'] );
		$switch_class = $type == 'visual' ? 'html-active' : 'tmce-active';
		if ( version_compare( get_bloginfo( 'version' ), '3.5', '<' ) ) {
			$toggle_buttons_class = "editor_toggle_buttons_legacy";
			$media_buttons_class = "editor_media_buttons_legacy";
		}
		else if ( version_compare( get_bloginfo( 'version' ), '3.8', '<' ) ) {
			$toggle_buttons_class = "wp-toggle-buttons";
			$media_buttons_class = "wp-media-buttons";
		}
		else {
			$toggle_buttons_class = "wp-editor-tabs";
			$media_buttons_class = "wp-media-buttons";
		}

?>
		<input id="<?php echo $this->get_field_id( 'type' ); ?>" name="<?php echo $this->get_field_name( 'type' ); ?>" type="hidden" value="<?php echo esc_attr( $type ); ?>" />
		<p><label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:' ); ?></label>
		<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr($title); ?>" /></p>
		<div id="wp-<?php echo $this->get_field_id( 'text' ); ?>-wrap" class="wp-core-ui wp-editor-wrap <?php echo $switch_class; ?>">
			<div class="wp-editor-tools hide-if-no-js">
				<div class="<?php echo $toggle_buttons_class; ?>">
					<a id="<?php echo $this->get_field_id( 'text' ); ?>-html" class="wp-switch-editor switch-html"><?php _e( 'HTML' ); ?></a>
					<a id="<?php echo $this->get_field_id( 'text' ); ?>-tmce" class="wp-switch-editor switch-tmce"><?php _e(' Visual' ); ?></a>
				</div>
				<div class="<?php echo $media_buttons_class; ?>">
					<?php do_action( 'media_buttons', $this->get_field_id( 'text' ) ); ?>
				</div>
			</div>
			<div class="wp-editor-container">
				<textarea class="widefat" rows="20" cols="40" id="<?php echo $this->get_field_id( 'text' ); ?>" name="<?php echo $this->get_field_name('text'); ?>"><?php echo $text; ?></textarea>
			</div>
		</div>
		<div class="wp-editor-bstw-links" style="font-size: 10px; text-align: right; padding: 5px 0;"><a href="http://www.blackstudio.it/en/wordpress-plugins/black-studio-tinymce-widget/" target="_blank"><?php echo __( 'Donate', 'black-studio-tinymce-widget' ); ?></a> | <a href="http://wordpress.org/support/plugin/black-studio-tinymce-widget" target="_blank"><?php echo __( 'Support', 'black-studio-tinymce-widget' ); ?></a> | <a href="http://wordpress.org/support/view/plugin-reviews/black-studio-tinymce-widget" target="_blank"><?php echo __( 'Rate', 'black-studio-tinymce-widget' ); ?></a> | <a href="https://twitter.com/blackstudioita" target="_blank"><?php echo __( 'Follow', 'black-studio-tinymce-widget' ); ?></a></div>
<?php
	}
}

/* Get plugin version */
function black_studio_tinymce_get_version() {
	$plugin_data = get_plugin_data( __FILE__ );
	$plugin_version = $plugin_data['Version'];
	return $plugin_version;
}

/* Load localization */
load_plugin_textdomain( 'black-studio-tinymce-widget', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' ); 

/* Widget initialization */
add_action( 'widgets_init', 'black_studio_tinymce_widgets_init' );
function black_studio_tinymce_widgets_init() {
	if ( ! is_blog_installed() )
		return;
	register_widget( 'WP_Widget_Black_Studio_TinyMCE' );
}

/* Add actions and filters (only in widgets admin page) */
add_action( 'admin_init', 'black_studio_tinymce_admin_init' );
function black_studio_tinymce_admin_init() {
	global $pagenow;
	$load_editor = false;
	if ( $pagenow == "widgets.php" || $pagenow == "customize.php" ) {
		$load_editor = true;
	}
	// Compatibility for WP Page Widget plugin
	if ( is_plugin_active('wp-page-widget/wp-page-widgets.php' ) && (
			( in_array( $pagenow, array( 'post-new.php', 'post.php') ) ) ||
			( in_array( $pagenow, array( 'edit-tags.php' ) ) && isset( $_GET['action'] ) && $_GET['action'] == 'edit' ) || 
			( in_array( $pagenow, array( 'admin.php' ) ) && isset( $_GET['page'] ) && in_array( $_GET['page'], array( 'pw-front-page', 'pw-search-page' ) ) )
	) ) {
		$load_editor = true;
	}
	if ( $load_editor ) {
		add_action( 'admin_head', 'black_studio_tinymce_load_tiny_mce' );
		add_filter( 'tiny_mce_before_init', 'black_studio_tinymce_init_editor', 20 );
		add_action( 'admin_print_scripts', 'black_studio_tinymce_scripts' );
		add_action( 'admin_print_styles', 'black_studio_tinymce_styles' );
		add_action( 'admin_print_footer_scripts', 'black_studio_tinymce_footer_scripts' );
		add_filter( 'atd_load_scripts', '__return_true'); // Compatibility with Jetpack After the deadline
	}
}

/* Instantiate tinyMCE editor */
function black_studio_tinymce_load_tiny_mce() {
	// Add support for thickbox media dialog
	add_thickbox();
	// New media modal dialog (WP 3.5+)
	if ( function_exists( 'wp_enqueue_media' ) ) {
		wp_enqueue_media(); 
	}
}

/* TinyMCE setup customization */
function black_studio_tinymce_init_editor( $initArray ) {
	global $pagenow;
	// Remove WP fullscreen mode and set the native tinyMCE fullscreen mode
	if ( version_compare( get_bloginfo( 'version' ), '3.3', '<' ) ) {
		$plugins = explode(',', $initArray['plugins']);
		if ( isset( $plugins['wpfullscreen'] ) ) {
			unset( $plugins['wpfullscreen'] );
		}
		if ( ! isset( $plugins['fullscreen'] ) ) {
			$plugins[] = 'fullscreen';
		}
		$initArray['plugins'] = implode( ',', $plugins );
	}
	// Remove the "More" toolbar button (only in widget screen)
	if ( $pagenow == "widgets.php" && version_compare( get_bloginfo( 'version' ), '3.8', '<' )) {
		$initArray['theme_advanced_buttons1'] = str_replace( ',wp_more', '', $initArray['theme_advanced_buttons1'] );
	}
	// Do not remove linebreaks
	$initArray['remove_linebreaks'] = false;
	// Convert newline characters to BR tags
	$initArray['convert_newlines_to_brs'] = false; 
	// Force P newlines
	$initArray['force_p_newlines'] = true; 
	// Force no newlines for BR
	$initArray['force_br_newlines'] = false; 
	// Do not remove redundant BR tags
	$initArray['remove_redundant_brs'] = false;
	// Force p block
	$initArray['forced_root_block'] = 'p';
	// Apply source formatting
	$initArray['apply_source_formatting '] = true;
	// Add proper newlines to source (i.e. around divs)
	$initArray['indent '] = true;
	// Return modified settings
	return $initArray;
}

/* Widget js loading */
function black_studio_tinymce_scripts() {
	wp_enqueue_script('media-upload');
	$version = black_studio_tinymce_get_version();
	$suffix = defined('SCRIPT_DEBUG') && SCRIPT_DEBUG ? '' : '.min';
	if ( version_compare( get_bloginfo( 'version' ), '3.3', '>=' ) ) {
		$local_data = array( 'error_duplicate_id' => __('ERROR: Duplicate widget ID detected. To avoid content loss, please create a new one with the same content and then delete this widget.', 'black-studio-tinymce-widget') );
		wp_enqueue_script( 'wplink' );
		wp_enqueue_script( 'wpdialogs-popup' );
		wp_enqueue_script( 'black-studio-tinymce-widget', plugins_url('black-studio-tinymce-widget' . $suffix . '.js', __FILE__ ), array( 'jquery', 'editor' ), $version, true );
		wp_localize_script( 'black-studio-tinymce-widget', 'black_studio_tinymce_local', $local_data );
		do_action( 'wp_enqueue_editor', array( 'tinymce' => true ) ); // Advanced Image Styles compatibility
	}
	else {
		wp_enqueue_script( 'black-studio-tinymce-widget-legacy', plugins_url('black-studio-tinymce-widget-legacy' . $suffix . '.js', __FILE__ ), array( 'jquery', 'editor' ), $version, true );
	}
}

/* Widget css loading */
function black_studio_tinymce_styles() {
	if ( version_compare( get_bloginfo( 'version' ), '3.3', '<' ) ) {
		wp_enqueue_style( 'thickbox' );
	}
	else {
		wp_enqueue_style( 'wp-jquery-ui-dialog' );
	}
	$style = 'black-studio-tinymce-widget';
	$version = black_studio_tinymce_get_version();
	wp_enqueue_style( 'editor-buttons' );
	if ( version_compare( get_bloginfo( 'version' ), '3.8', '<' ) ) {
		$style .= '-legacy';
	} 
	wp_enqueue_style( $style, plugins_url( $style. '.css', __FILE__ ), array(), $version );
}


/* Footer script */
function black_studio_tinymce_footer_scripts() {
	// Setup for WP 3.1 and previous versions
	if ( version_compare( get_bloginfo( 'version' ), '3.2', '<' ) ) {
		if ( function_exists( 'wp_tiny_mce' ) ) {
			wp_tiny_mce( false, array() );
		}
		if ( function_exists( 'wp_tiny_mce_preload_dialogs' ) ) {
			wp_tiny_mce_preload_dialogs();
		}
	}
	// Setup for WP 3.2
	else if ( version_compare( get_bloginfo( 'version' ), '3.3', '<' ) ) {
		if ( function_exists( 'wp_tiny_mce' ) ) {
			wp_tiny_mce( false, array() );
		}
		if ( function_exists( 'wp_preload_dialogs') ) {
			wp_preload_dialogs( array( 'plugins' => 'wpdialogs,wplink,wpfullscreen' ) );
		}
	}
	// Setup for WP 3.3+ - New Editor API
	else {
		wp_editor( '', 'black-studio-tinymce-widget' );
	}
}

/* Support for Smilies */
add_filter( 'widget_text', 'black_studio_tinymce_apply_smilies_to_widget_text' );
function black_studio_tinymce_apply_smilies_to_widget_text( $text ) {
	if ( get_option( 'use_smilies' ) ) {
		$text = convert_smilies( $text );
	}
	return $text;
}

/* Hack needed to enable full media options when adding content form media library */
/* (this is done excluding post_id parameter in Thickbox iframe url) */
add_filter( '_upload_iframe_src', 'black_studio_tinymce_upload_iframe_src' );
function black_studio_tinymce_upload_iframe_src ( $upload_iframe_src ) {
	global $pagenow;
	if ( $pagenow == "widgets.php" || ( $pagenow == "admin-ajax.php" && isset ( $_POST['id_base'] ) && $_POST['id_base'] == "black-studio-tinymce" ) ) {
		$upload_iframe_src = str_replace( 'post_id=0', '', $upload_iframe_src );
	}
	return $upload_iframe_src;
}

/* Hack for widgets accessibility mode */
add_filter( 'wp_default_editor', 'black_studio_tinymce_editor_accessibility_mode' );
function black_studio_tinymce_editor_accessibility_mode($editor) {
	global $pagenow;
	if ( $pagenow == "widgets.php" && isset( $_GET['editwidget'] ) && strpos( $_GET['editwidget'], 'black-studio-tinymce' ) === 0 ) {
		$editor = 'html';
	}
	return $editor;
}
