<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class that provides compatibility code with other plugins
 *
 * @package Black_Studio_TinyMCE_Widget
 * @since 2.0.0
 */

if ( ! class_exists( 'Black_Studio_TinyMCE_Compatibility_Plugins' ) ) {

	final class Black_Studio_TinyMCE_Compatibility_Plugins {

		/**
		 * The single instance of the class
		 *
		 * @var object
		 * @since 2.0.0
		 */
		protected static $_instance = null;

		/**
		 * Return the single class instance
		 *
		 * @param string[] $plugins
		 * @return object
		 * @since 2.0.0
		 */
		public static function instance( $plugins = array() ) {
			if ( is_null( self::$_instance ) ) {
				self::$_instance = new self( $plugins );
			}
			return self::$_instance;
		}

		/**
		 * Class constructor
		 *
		 * @param string[] $plugins
		 * @since 2.0.0
		 */
		protected function __construct( $plugins ) {
			foreach ( $plugins as $plugin ) {
				if ( is_callable( array( $this, $plugin ), false ) ) {
					$this->$plugin();
				}
			}
		}

		/**
		 * Prevent the class from being cloned
		 *
		 * @return void
		 * @since 2.0.0
		 */
		protected function __clone() {
			_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; uh?' ), '2.0' );
		}

		/**
		 * Compatibility with WPML
		 *
		 * @uses add_filter()
		 *
		 * @return void
		 * @since 2.0.0
		 */
		public function wpml() {
			add_filter( 'black_studio_tinymce_widget_update', array( $this, 'wpml_widget_update' ), 10, 2 );
			add_filter( 'widget_text', array( $this, 'wpml_widget_text' ), 2, 3 );
		}

		/**
		 * Add widget text to WPML String translation
		 *
		 * @uses icl_register_string() Part of WPML
		 *
		 * @param mixed[] $instance
		 * @param object $widget
		 * @return mixed[]
		 * @since 2.0.0
		 */
		public function wpml_widget_update( $instance, $widget ) {
			if ( function_exists( 'icl_register_string' ) && ! empty( $widget->number ) ) {
				icl_register_string( 'Widgets', 'widget body - ' . $widget->id_base . '-' . $widget->number, $instance['text'] );
			}
			return $instance;
		}

		/**
		 * Translate widget text
		 *
		 * @uses icl_t() Part of WPML
		 *
		 * @param string $text
		 * @param mixed[]|null $instance
		 * @param object|null $widget
		 * @return string
		 * @since 2.0.0
		 */
		public function wpml_widget_text( $text, $instance = null, $widget = null ) {
			if ( bstw()->check_widget( $widget ) && ! empty( $instance ) ) {
				if ( function_exists( 'icl_t' ) ) {
					$text = icl_t( 'Widgets', 'widget body - ' . $widget->id_base . '-' . $widget->number, $text );
				}
			}
			return $text;
		}

		/**
		 * Compatibility for WP Page Widget plugin
		 *
		 * @uses add_action()
		 *
		 * @return void
		 * @since 2.0.0
		 */
		public function wp_page_widget() {
			add_action( 'admin_init', array( $this, 'wp_page_widget_admin_init' ) );
		}

		/**
		 * Initialize compatibility for WP Page Widget plugin (only for WordPress 3.3+)
		 *
		 * @uses add_filter()
		 * @uses add_action()
		 * @uses is_plugin_active()
		 * @uses get_bloginfo()
		 *
		 * @return void
		 * @since 2.0.0
		 */
		public function wp_page_widget_admin_init() {
			if ( is_admin() && is_plugin_active( 'wp-page-widget/wp-page-widgets.php' ) && version_compare( get_bloginfo( 'version' ), '3.3', '>=' ) ) {
				add_filter( 'black_studio_tinymce_enable_pages', array( $this, 'wp_page_widget_enable_pages' ) );
				add_action( 'admin_print_scripts', array( $this, 'wp_page_widget_enqueue_script' ) );
			}
		}

		/**
		 * Enable filter for WP Page Widget plugin
		 *
		 * @param string[] $pages
		 * @return string[]
		 * @since 2.0.0
		 */
		public function wp_page_widget_enable_pages( $pages ) {
			$pages[] = 'post-new.php';
			$pages[] = 'post.php';
			if ( isset( $_GET['action'] ) && 'edit' == $_GET['action'] ) {
				$pages[] = 'edit-tags.php';
			}
			if ( isset( $_GET['page'] ) && in_array( $_GET['page'], array( 'pw-front-page', 'pw-search-page' ) ) ) {
				$pages[] = 'admin.php';
			}
			return $pages;
		}

		/**
		 * Enqueue script for WP Page Widget plugin
		 *
		 * @uses apply_filters()
		 * @uses wp_enqueue_script()
		 * @uses plugins_url()
		 * @uses SCRIPT_DEBUG
		 *
		 * @return void
		 * @since 2.0.0
		 */
		public function wp_page_widget_enqueue_script() {
			$main_script = apply_filters( 'black-studio-tinymce-widget-script', 'black-studio-tinymce-widget' );
			$compat_script = 'wp-page-widget';
			$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
			wp_enqueue_script(
				$compat_script,
				plugins_url( 'js/' . $compat_script . $suffix . '.js', dirname( __FILE__ ) ),
				array( 'jquery', 'editor', 'quicktags', $main_script ),
				bstw()->get_version(),
				true
			);
		}

		/**
		 * Compatibility with Page Builder (SiteOrigin Panels)
		 *
		 * @uses add_action()
		 *
		 * @return void
		 * @since 2.0.0
		 */
		public function siteorigin_panels() {
			add_action( 'admin_init', array( $this, 'siteorigin_panels_disable_compat' ), 7 );
			add_action( 'admin_init', array( $this, 'siteorigin_panels_admin_init' ) );
		}

		/**
		 * Initialize compatibility for Page Builder (SiteOrigin Panels)
		 *
		 * @uses add_filter()
		 * @uses add_action()
		 * @uses remove_filter()
		 * @uses add_action()
		 * @uses is_plugin_active()
		 *
		 * @return void
		 * @since 2.0.0
		 */
		public function siteorigin_panels_admin_init() {
			if ( is_admin() && is_plugin_active( 'siteorigin-panels/siteorigin-panels.php' ) ) {
				add_filter( 'siteorigin_panels_widget_object', array( $this, 'siteorigin_panels_widget_object' ), 10 );
				add_filter( 'black_studio_tinymce_container_selectors', array( $this, 'siteorigin_panels_container_selectors' ) );
				add_filter( 'black_studio_tinymce_activate_events', array( $this, 'siteorigin_panels_activate_events' ) );
				add_filter( 'black_studio_tinymce_deactivate_events', array( $this, 'siteorigin_panels_deactivate_events' ) );
				add_filter( 'black_studio_tinymce_enable_pages', array( $this, 'siteorigin_panels_enable_pages' ) );
				remove_filter( 'widget_text', array( bstw()->text_filters(), 'wpautop' ), 8 );
			}
		}

		/**
		 * Remove widget number to prevent translation when using Page Builder (SiteOrigin Panels) + WPML String Translation
		 *
		 * @param object $the_widget
		 * @return object
		 * @since 2.0.0
		 */
		public function siteorigin_panels_widget_object( $the_widget ) {
			if ( isset( $the_widget->id_base ) && 'black-studio-tinymce' == $the_widget->id_base ) {
				$the_widget->number = '';
			}
			return $the_widget;
		}

		/**
		 * Add selector for widget detection for Page Builder (SiteOrigin Panels)
		 *
		 * @param string[] $selectors
		 * @return string[]
		 * @since 2.0.0
		 */
		public function siteorigin_panels_container_selectors( $selectors ) {
			$selectors[] = 'div.panel-dialog';
			return $selectors;
		}

		/**
		 * Add activate events for Page Builder (SiteOrigin Panels)
		 *
		 * @param string[] $events
		 * @return string[]
		 * @since 2.0.0
		 */
		public function siteorigin_panels_activate_events( $events ) {
			$events[] = 'panelsopen';
			return $events;
		}

		/**
		 * Add deactivate events for Page Builder (SiteOrigin Panels)
		 *
		 * @param string[] $events
		 * @return string[]
		 * @since 2.0.0
		 */
		public function siteorigin_panels_deactivate_events( $events ) {
			$events[] = 'panelsdone';
			return $events;
		}

		/**
		 * Add pages filter to enable editor for Page Builder (SiteOrigin Panels)
		 *
		 * @param string[] $pages
		 * @return string[]
		 * @since 2.0.0
		 */
		public function siteorigin_panels_enable_pages( $pages ) {
			$pages[] = 'post-new.php';
			$pages[] = 'post.php';
			if ( isset( $_GET['page'] ) && 'so_panels_home_page' == $_GET['page'] ) {
				$pages[] = 'themes.php';
			}
			return $pages;
		}

		/**
		 * Disable old compatibility code provided by Page Builder (SiteOrigin Panels)
		 *
		 * @return void
		 * @since 2.0.0
		 */
		public function siteorigin_panels_disable_compat( ) {
			remove_action( 'admin_init', 'siteorigin_panels_black_studio_tinymce_admin_init' );
			remove_action( 'admin_enqueue_scripts', 'siteorigin_panels_black_studio_tinymce_admin_enqueue', 15 );
		}

		/**
		 * Compatibility with Jetpack After the deadline
		 *
		 * @uses add_action()
		 *
		 * @return void
		 * @since 2.0.0
		 */
		public function jetpack_after_the_deadline() {
			add_action( 'black_studio_tinymce_load', array( $this, 'jetpack_after_the_deadline_load' ) );
		}

		/**
		 * Load Jetpack After the deadline scripts
		 *
		 * @uses add_filter()
		 *
		 * @return void
		 * @since 2.0.0
		 */
		public function jetpack_after_the_deadline_load() {
			add_filter( 'atd_load_scripts', '__return_true' );
		}

	} // END class Black_Studio_TinyMCE_Compatibility_Plugins

} // END class_exists check
