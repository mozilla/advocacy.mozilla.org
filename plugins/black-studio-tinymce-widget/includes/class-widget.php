<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Widget class
 *
 * @package Black_Studio_TinyMCE_Widget
 * @since 0.5
 */

if ( ! class_exists( 'WP_Widget_Black_Studio_TinyMCE' ) ) {

	class WP_Widget_Black_Studio_TinyMCE extends WP_Widget {

		/**
		 * Widget Class constructor
		 *
		 * @uses WP_Widget::__construct()
		 * @since 0.5
		 */
		public function __construct() {
			/* translators: title of the widget */
			$widget_title = __( 'Visual Editor', 'black-studio-tinymce-widget' );
			/* translators: description of the widget, shown in available widgets */
			$widget_description = __( 'Arbitrary text or HTML with visual editor', 'black-studio-tinymce-widget' );
			$widget_ops = array( 'classname' => 'widget_black_studio_tinymce', 'description' => $widget_description );
			$control_ops = array( 'width' => 800, 'height' => 600 );
			parent::__construct( 'black-studio-tinymce', $widget_title, $widget_ops, $control_ops );
		}

		/**
		 * Output widget HTML code
		 *
		 * @uses apply_filters()
		 * @uses WP_Widget::$id_base
		 *
		 * @param string[] $args
		 * @param mixed[] $instance
		 * @return void
		 * @since 0.5
		 */
		public function widget( $args, $instance ) {
			$before_widget = $args['before_widget'];
			$after_widget = $args['after_widget'];
			$before_title = $args['before_title'];
			$after_title = $args['after_title'];
			$before_text = apply_filters( 'black_studio_tinymce_before_text', '<div class="textwidget">', $instance );
			$after_text = apply_filters( 'black_studio_tinymce_after_text', '</div>', $instance );
			$title = apply_filters( 'widget_title', empty( $instance['title'] ) ? '' : $instance['title'], $instance, $this->id_base );
			$text = apply_filters( 'widget_text', empty( $instance['text'] ) ? '' : $instance['text'], $instance, $this );
			$hide_empty = apply_filters( 'black_studio_tinymce_hide_empty', false, $instance );
			if ( ! ( $hide_empty && empty( $text ) ) ) {
				$output = $before_widget;
				if ( ! empty( $title ) ) {
					$output .= $before_title . $title . $after_title;
				}
				$output .= $before_text . $text . $after_text;
				$output .= $after_widget;
				echo $output; // xss ok
			}
		}

		/**
		 * Update widget data
		 *
		 * @uses current_user_can()
		 * @uses wp_filter_post_kses()
		 * @uses apply_filters()
		 *
		 * @param mixed[] $new_instance
		 * @param mixed[] $old_instance
		 * @return mixed[]
		 * @since 0.5
		 */
		public function update( $new_instance, $old_instance ) {
			$instance = $old_instance;
			$instance['title'] = strip_tags( $new_instance['title'] );
			if ( current_user_can( 'unfiltered_html' ) ) {
				$instance['text'] = $new_instance['text'];
			}
			else {
				$instance['text'] = stripslashes( wp_filter_post_kses( addslashes( $new_instance['text'] ) ) ); // wp_filter_post_kses() expects slashed
			}
			$instance['type'] = strip_tags( $new_instance['type'] );
			$instance['filter'] = strip_tags( $new_instance['filter'] );
			$instance = apply_filters( 'black_studio_tinymce_widget_update',  $instance, $this );
			return $instance;
		}

		/**
		 * Output widget form
		 *
		 * @uses wp_parse_args()
		 * @uses apply_filters()
		 * @uses esc_attr()
		 * @uses esc_textarea()
		 * @uses WP_Widget::get_field_id()
		 * @uses WP_Widget::get_field_name()
		 * @uses _e()
		 * @uses do_action()
		 * @uses apply_filters()
		 *
		 * @param mixed[] $instance
		 * @return void
		 * @since 0.5
		 */
		public function form( $instance ) {
			$instance = wp_parse_args( (array) $instance, array( 'title' => '', 'text' => '', 'type' => 'visual' ) );
			// Guess (wpautop) filter value for widgets created with previous version
			if ( ! isset( $instance['filter'] ) ) {
				$instance['filter'] = $instance['type'] == 'visual' && substr( $instance['text'], 0, 3 ) != '<p>' ? 1 : 0;
			}
			$title = strip_tags( $instance['title'] );
			do_action( 'black_studio_tinymce_before_editor' );
			?>
			<input id="<?php echo $this->get_field_id( 'type' ); ?>" name="<?php echo $this->get_field_name( 'type' ); ?>" type="hidden" value="<?php echo esc_attr( $instance['type'] ); ?>" />
			<p><label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php _e( 'Title:' ); ?></label>
			<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" /></p>
			<?php
			do_action( 'black_studio_tinymce_editor', $instance['text'], $this->get_field_id( 'text' ), $this->get_field_name( 'text' ), $instance['type'] );
			do_action( 'black_studio_tinymce_after_editor' );
			?>
			<input id="<?php echo esc_attr( $this->get_field_id( 'filter' ) ); ?>-hidden" name="<?php echo esc_attr( $this->get_field_name( 'filter' ) ); ?>" type="hidden" value="0" />
			<p><input id="<?php echo esc_attr( $this->get_field_id( 'filter' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'filter' ) ); ?>" type="checkbox" value="1" <?php checked( $instance['filter'] ); ?> />&nbsp;<label for="<?php echo esc_attr( $this->get_field_id( 'filter' ) ); ?>"><?php _e( 'Automatically add paragraphs' ); ?></label></p>
            <?php
		}

	} // END class WP_Widget_Black_Studio_TinyMCE

} // END class_exists check
