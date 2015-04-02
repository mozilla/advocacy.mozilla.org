<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class that provides admin pointer
 *
 * @package Black_Studio_TinyMCE_Widget
 * @since 2.1.0
 */

if ( ! class_exists( 'Black_Studio_TinyMCE_Admin_Pointer' ) ) {

	final class Black_Studio_TinyMCE_Admin_Pointer {

		/**
		 * The single instance of the class
		 *
		 * @var object
		 * @since 2.1.0
		 */
		protected static $_instance = null;

		/**
		 * Return the single class instance
		 *
		 * @return object
		 * @since 2.1.0
		 */
		public static function instance() {
			if ( is_null( self::$_instance ) ) {
				self::$_instance = new self();
			}
			return self::$_instance;
		}

		/**
		 * Class constructor
		 *
		 * @uses add_action()
		 * @uses add_filter()
		 * @uses get_option()
		 * @uses get_bloginfo()
		 *
		 * @global object $wp_embed
		 * @since 2.0.0
		 */
		protected function __construct() {
			// Register action and filter hooks
			add_action( 'admin_init', array( $this, 'admin_init' ), 20 );
		}

		/**
		 * Prevent the class from being cloned
		 *
		 * @return void
		 * @since 2.1.0
		 */
		protected function __clone() {
			_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; uh?' ), '2.0' );
		}

		/**
		 * Add actions and filters (only in widgets admin page)
		 *
		 * @uses add_action()
		 * @uses add_filter()
		 *
		 * @return void
		 * @since 2.1.0
		 */
		public function admin_init() {
			global $pagenow;
			if ( 'widgets.php' == $pagenow ) {
				add_action( 'admin_print_scripts', array( $this, 'load' ) );
				add_filter( 'black_studio_tinymce_admin_pointers-widgets', array( $this, 'register' ), 10 );
				add_filter( 'black_studio_tinymce_admin_pointers-widgets', array( $this, 'filter_dismissed' ), 20 );
			}
		}

		/**
		 * Helper function to enqueue script
		 *
		 * @uses wp_enqueue_style()
		 * @uses wp_enqueue_script()
		 * @uses plugins_url()
		 * @uses wp_localize_script()
		 * @uses SCRIPT_DEBUG
		 *
		 * @param mixed[] $pointers
		 * @return void
		 * @since 2.1.0
		 */
		public function enqueue( $pointers ) {
			$script = 'black-studio-tinymce-widget-pointer';
			$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
			wp_enqueue_style( 'wp-pointer' );
			wp_enqueue_script(
				$script,
				plugins_url( 'js/' . $script . $suffix . '.js', dirname( __FILE__ ) ),
				array( 'wp-pointer' ),
				bstw()->get_version(),
				true
			);
			wp_localize_script( 'black-studio-tinymce-widget-pointer', 'bstw_pointers', $pointers );
		}

		/**
		 * Load admin pointer(s)
		 *
		 * @uses get_current_screen()
		 * @uses apply_filters()
		 *
		 * @return void
		 * @since 2.1.0
		 */
		public function load() {
			$screen = get_current_screen();
			$pointers = apply_filters( 'black_studio_tinymce_admin_pointers-' . $screen->id, array() );
			if ( ! empty( $pointers ) ) {
				$this->enqueue( $pointers );
			}
		}

		/**
		 * Remove dismissed pointer(s)
		 *
		 * @uses get_user_meta()
		 * @uses get_current_user_id()
		 *
		 * @param mixed[] $pointers
		 * @return mixed[]
		 * @since 2.1.0
		 */
		public function filter_dismissed( $pointers ) {
			$valid_pointers = array();
			if ( is_array( $pointers ) ) {
				$dismissed = explode( ',', (string) get_user_meta( get_current_user_id(), 'dismissed_wp_pointers', true ) );
				foreach ( $pointers as $pointer_id => $pointer ) {
					if ( ! in_array( $pointer_id, $dismissed ) ) {
						$pointer['pointer_id'] = $pointer_id;
						$valid_pointers['pointers'][] = $pointer;
					}
				}
			}
			return $valid_pointers;
		}

		/**
		 * Register admin pointer(s)
		 *
		 * @param mixed[] $pointers
		 * @return mixed[]
		 * @since 2.1.0
		 */
		public function register( $pointers ) {
			$pointers['black_studio_tinymce_widget'] = array(
				'target' => 'div[id$=black-studio-tinymce-__i__] .widget-top',
				'options' => array(
					'content' => sprintf( '<h3>%s</h3> <p>%s</p>',
						/* translators: title for the dismissable admin pointer tooltip (same as plugin name) */
						__( 'Black Studio TinyMCE Widget', 'black-studio-tinymce-widget' ),
						/* translators: text for the dismissable admin pointer tooltip */
						__( 'The Visual Editor widget allows you to insert rich text and media objects in your sidebars', 'black-studio-tinymce-widget' )
					),
					'position' => array( 'edge' => 'left', 'align' => 'middle' )
				)
			);
			return $pointers;
		}


	} // END class Black_Studio_TinyMCE_Admin_Pointer

} // END class_exists check
